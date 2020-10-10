import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Capitan America';
  
  rareName = 'caPiTaN amErIca';

  array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  PI: number = Math.PI;

  percentage = 0.234;

  salary = 5684.2;

  hero = {
    name: 'Logan',
    pass: 'Wolverine',
    age: 500,
    address: {
      street: 'St 4',
      house: 'Blue'
    }
  };

  varPromise = new Promise<string> ((resolve) => {
    setTimeout(() => {
      resolve('data arrives');
    }, 3000);
  });

  dateToday: Date = new Date();

  idiom = 'es';

  videUrl = 'https://www.youtube.com/embed/CMPkoNVSgmU';

  state = true;

}
