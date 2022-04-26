class CoffeeScriptError extends Error {
    /**
   * @param {unknown} error
   */
  constructor(error) {
    // @ts-ignore
    super(error);

    this.name = "CoffeeScriptError";
  }
}

export default CoffeeScriptError;
