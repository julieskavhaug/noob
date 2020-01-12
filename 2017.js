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
            alert(i)
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

const TimeLoennAnsatt1= new TimeLoennAnsatt("100176-2312", 185, 37.5);
const TimeLoennAnsatt2 = new TimeLoennAnsatt("131282-2312", 200, 32);

const funktionerAnsatt1 = new FunktionerAnsatt("05667-0213", 35000);
const funktionerAnsatt2 = new FunktionerAnsatt("230865-0213", 42000);


const firma = new Firma();

firma.tilfoejansatt(TimeLoennAnsatt1, TimeLoennAnsatt2);
firma.tilfoejansatt(funktionerAnsatt1, funktionerAnsatt2);
