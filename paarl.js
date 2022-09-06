export default function firstPaarl(regNumbers) {
    let Arr = []; 
     var strArray= regNumbers.split(',');
     
      for (var i=0; i<strArray.length; i++) {
      var regN = strArray[i].trim();
       
     if (regN.startsWith('CJ')) {
     return regN;
       console.log(regN);
      }
      }
     return '';
   }