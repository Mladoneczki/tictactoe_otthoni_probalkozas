import TicTacModel from "../m/TicTacModel.js"
import Jatekter from "../view/Jatekter.js"

export default class TicTacToeController{
    constructor(){
        this.tTModel=new TicTacModel
        this.szuloElem=$(".jatek")
       this.jatekTer= new Jatekter(this.szuloElem)
        this.jelolEsemeny()
        
    }
    jelolEsemeny(){
        $(window).on("elhelyez",(event)=>{
            this.tTModel.mezoJeloles(event.detail)
            this.tTModel.nyertE()
            this.jatekTer.vegKimenetel(this.tTModel.nyert)
           console.log(this.tTModel.nyert)
        })
} }