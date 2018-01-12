import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charArrayGenerator'
})
export class CharArrayGeneratorPipe implements PipeTransform {

  transform(firstLast:string): any {
    let first = firstLast.charCodeAt(0);
    let last = firstLast.charCodeAt(1);
    let generatedCharArray = [];

    for(let i=first; i<=last; i++) {
      generatedCharArray.push(String.fromCharCode(i));
    }

    console.log(generatedCharArray);
    return generatedCharArray;
  }

}
