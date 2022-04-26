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
export default function loader<T>(
  this: import("webpack").LoaderContext<coffeescript.Options>,
  source: string
): Promise<Buffer | undefined> | void;
export type Schema = import("schema-utils/declarations/validate").Schema;
/**
 * <T>
 */
export type LoaderOptions<T> = import("coffeescript").Options;
import coffeescript from "coffeescript";
