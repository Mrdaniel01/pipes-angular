import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, state: boolean = true): string {

    if (state){

      return '*'.repeat(value.length);

    } else {
      return value;
    }
  }

}
