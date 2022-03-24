import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatANumber'
})
export class FormatANumberPipe implements PipeTransform {

  public transform(value: number, caseType: 'ru-RU' | 'en-US'): string {
      return  new Intl.NumberFormat(caseType).format(value);
       
  }

}
