export class Utils {
    setChar(sourse:string, char:string, index:number):string{
        let largo = sourse.length;
        if(index == 0){
          let numTarjAux = sourse.slice(1);
          sourse = char+numTarjAux;      
        }else if(index == largo){
          let numTarjAux = sourse.substring(0,largo);
          sourse = numTarjAux+char;
        }else{      
          let numTarjAux1 = sourse.substring(0,index);
          let numTarjAux2 = sourse.slice(index+1);
          sourse = numTarjAux1+char+numTarjAux2;      
        }    

        return sourse;
    }
}
