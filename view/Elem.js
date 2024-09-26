export default class Elem{
#index;
#ertek;
    constructor(szuloElem, index){
        this.szuloElem=szuloElem
        this.#index=index
        this.#ertek=true;
        
        this.elemLetrehoz()
        this.elem=$(".mezo:last")
        this.elemEsemeny()

    }

    elemLetrehoz(){
        this.szuloElem.append(`<div class=mezo>
            <p id=${this.#index}></p>
        </div>`)
    }

    elemEsemeny(){
        this.elem.on("click", () => {
            const e = new CustomEvent("elhelyez", { detail: this.#index });
            window.dispatchEvent(e);
          });

    }

}