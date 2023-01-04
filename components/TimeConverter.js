export default class TimeConverter {



    constructor() {
     this._kulilumpi=864;
     this._lumpi=    86400;  
     this._djudja=   8640000;      // Stunde
     this._quagorio= 86400000;         //Tag
     this._yangdan=  864000000;       // Woche
     this._knoka=    8640000000;          //Monate
     this._shimo=    86400000000;     
    }
   


  convertTimeToDjuda(time) {

     var  Stringtimearr = [];
 
     var rest = time; //

     const shimo = Math.floor(rest / this._shimo);
     rest = rest % this._shimo;

 
 
 
     var knoka = Math.floor(rest / this._knoka);
     rest = rest % this._knoka;
 
 
 
     var yangdan = Math.floor(rest / this._yangdan);
     rest = rest % this._yangdan;
 
     var quagorio = Math.floor(rest / this._quagorio);
     rest = rest % this._quagorio;
 
     var djudja = Math.floor(rest / this._djudja);
     rest = rest % this._djudja;
 
     var lumpi = Math.floor(rest / this._lumpi);
     rest = rest % this._lumpi;
 
     var kulilumpi = Math.floor(rest / this._kulilumpi);
 
 
     Stringtimearr[0] = shimo;
     Stringtimearr[1] = knoka;
     Stringtimearr[2] = yangdan;
     Stringtimearr[3] = quagorio;
     Stringtimearr[4] = djudja;
     Stringtimearr[5] = lumpi;
     Stringtimearr[6] = kulilumpi;
 
 
     return  Stringtimearr;
 }
 
}



