//FIRMA
class Firma {
    constructor(){
        this.ansattListe = [];
    }
    tilfoejansatt(ansatt){
        this.ansattListe.push(ansatt);
    }
    loennBeregning(){
        let samletLoenn = 0;
        for(let i in this.ansattListe){
            samletLoenn += this.ansattListe[i].beregnLoenn();
        }
        console.log("Samlet maanedslønn: " + samletLoenn.toFixed(2));
    }
}


//ANSATT
class Ansatt {
    constructor(cprNr){
        this.CPRnr = cprNr;
    }
    beregnloenn(){
        return null;
    }
}


//TIMELØNN ANSATT
class TimeLoennAnsatt{
    constructor(cprNr, timeLoenn, timerPrUke){
        this.TimeLoenn = timeLoenn;
        this.TimerPrUke = timerPrUke;
    }
    beregnLoenn(){
        const ukerPrMaaned = 4;
        return this.TimeLoenn * this.TimerPrUke * ukerPrMaaned;

    }



}
//FUNKSJONER ANSATT
class FunktionerAnsatt{
            constructor(cprNr, maanedsLoenn){
                this.maanedsLoenn = maanedsLoenn;
            }
            beregnLoenn(){
                return this.maanedsLoenn
            }
}