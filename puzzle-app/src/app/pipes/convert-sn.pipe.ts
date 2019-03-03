import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSn'
})
export class ConvertSnPipe implements PipeTransform {

  transform(value: any, args?: any): any { 
    if(value === 1){
      return 'A';
    }else if(value === 2){
      return 'B';
    }else if(value === 3){
      return 'C';
    }else if(value === 4){
      return 'D';
    }
  }

}
