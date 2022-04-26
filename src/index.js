/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// @ts-ignore
import coffeescript from "coffeescript";

import schema from "./options.json";
import CoffeeScriptError from "./CoffeeScriptError";

/** @typedef {import("schema-utils/declarations/validate").Schema} Schema */

/**
 * @template T
* // @ts-ignore
 * @typedef {import('coffeescript').Options} LoaderOptions<T>
 */

/**
 * @template T
 * @this {import("webpack").LoaderContext<LoaderOptions<T>>}
 * @param {string} source
 * @returns {Promise<Buffer | undefined> | void}
 */
export default function loader(source) {
  const options = this.getOptions(/** @type {Schema} */ (schema));
  const callback = this.async();
  const useSourceMap =
    typeof options.sourceMap === "boolean" ? options.sourceMap : this.sourceMap;

  let result;

  try {
    result = /** @type {import('coffeescript').CodeWithSourceMap | string} */ coffeescript.compile(source, {
      ...{ sourceMap: useSourceMap, bare: true },
      ...options,
      ...{ filename: this.resourcePath },
    });
  } catch (error) {
    callback(new CoffeeScriptError(error));

    return;
  }

  let map;

  // @ts-ignore
  if (useSourceMap && result.v3SourceMap) {
    // @ts-ignore
    map = JSON.parse(result.v3SourceMap);

    delete map.file;

    // @ts-ignore
    result = result.js;
  }

  callback(null, result, map);
}
