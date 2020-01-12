import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianCurrency'
})
export class PersianCurrencyPipe implements PipeTransform {
  transform(value: string, isToman?: boolean): any {
    return isToman ? `${value} تومان` : `${value} ریال`;
  }
}
