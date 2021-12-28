import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMaskPipe'
})
export class CreditCardMaskPipePipe implements PipeTransform {

  transform(plainCreditCard: string): string {
    let val = plainCreditCard+"0000000000000000";
    let ret = '';
    let indexGroup = 0;
    let lenght = 0;

    for (var i = 0; i < val.length; i++) {
      ret += val[lenght];
      lenght++;
      indexGroup++;
      if(lenght>15){
        break;
      }
      if(indexGroup>3){
        ret+='-';
        indexGroup=0;
      }
    }

    return ret;
  }

}
