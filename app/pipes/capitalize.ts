import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'UPPER'
})
export class CapatalizePipe implements PipeTransform {

   transform(input: string, args: any[]) {   
      console.log("Capitalize", input, args);
    return input.toUpperCase();
  } 
}