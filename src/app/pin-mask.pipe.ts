import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pinMask'
})
export class PinMaskPipe implements PipeTransform {

  is_numeric(str:string){
    return /^\d+$/.test(str);
  }

  transform(plainPinCard: string): string {
    let val = plainPinCard+"    ";
    let ret = '';
    let lenght = 0;

    for (var i = 0; i < 4; i++) {
      if(this.is_numeric(val[i])){
        ret += 'X';
      }else{
        ret += '_';
      }
      if(i<3){
        ret += ' - ';
      }
    }

    return ret;
  }

}
