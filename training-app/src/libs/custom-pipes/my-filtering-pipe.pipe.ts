import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilteringPipe'
})
export class MyFilteringPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string[], ...args: string[]): unknown {
    let result: any[] = [];
    value.forEach(element => {
      const isExistLetter = element.includes(args[0].toString());
      if (isExistLetter) {
        result.push(element);
      }
    });

    return result;
  }

}
