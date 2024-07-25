export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
