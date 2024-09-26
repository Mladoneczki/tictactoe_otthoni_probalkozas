export default class TicTacModel {
  jatekKor;
  #lista;
  nyert;
  constructor() {
    this.jatekKor = 1;
    this.#lista = [];
    this.nyert = null;
  }
  mezoJeloles(id) {
    const elem = $(`#${id}`);
    const szulo = elem.parent();
    console.log(szulo);
    if (this.jatekKor % 2 === 0) {
      elem.text("x");
      szulo.addClass("hasznalt");
      this.#lista[id] = 0;;
    } else {
      elem.text("o");
      this.#lista[id] = 1;
      console.log;
      szulo.addClass("hasznalt");
    }
    this.jatekKor++;
    console.log(this.jatekKor)
  }

  nyertE() {
    const lista = this.#lista;

    if (
      (lista[0] === lista[1] && lista[1] === lista[2] && lista[0] !== undefined) ||
      (lista[3] === lista[4] && lista[4] === lista[5] && lista[3] !== undefined) ||
      (lista[6] === lista[7] && lista[7] === lista[8] && lista[6] !== undefined) ||
      (lista[0] === lista[3] && lista[3] === lista[6] && lista[0] !== undefined) ||
      (lista[1] === lista[4] && lista[4] === lista[7] && lista[1] !== undefined) ||
      (lista[2] === lista[5] && lista[5] === lista[8] && lista[2] !== undefined) ||
      (lista[0] === lista[4] && lista[4] === lista[8] && lista[0] !== undefined) ||
      (lista[2] === lista[4] && lista[4] === lista[6] && lista[2] !== undefined)
    ) {
      this.nyert = true;
    } else if (this.jatekKor > 9) {
      this.nyert = false;
    }
  }
}
 