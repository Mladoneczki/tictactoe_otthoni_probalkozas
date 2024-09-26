import Elem from "./Elem.js";

export default class Jatekter{
    
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        
        this.palyaLetrehoz()

        
    }
    palyaLetrehoz(){
        for (let index = 0; index <9; index++) {
            new Elem(this.szuloElem,index)
            }
    }

    vegKimenetel(eredmeny){
        if(eredmeny==true){
            this.szuloElem.append("<div><p>Gratulálok! Nyertél!</p></div>")
        }
        else if(eredmeny==false){
            this.szuloElem.append("<div><p>Döntetlen!</p></div>")

        }
    }

   


}