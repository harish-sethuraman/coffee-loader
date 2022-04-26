export default CoffeeScriptError;
declare class CoffeeScriptError extends Error {
  /**
   * @param {unknown} error
   */
  constructor(error: unknown);
}
