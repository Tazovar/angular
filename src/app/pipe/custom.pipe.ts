import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(typeof value == 'string'){
      value = Number(value)
      if(!isNaN(value)){
        return Number(value) + 'working'
      }
    }
    return value + 'is not working'
  }

}
