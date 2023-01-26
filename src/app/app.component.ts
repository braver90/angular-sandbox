import { Component, VERSION } from '@angular/core';
import { RxdbService } from './services/rxdb/rxdb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private rxbd: RxdbService) {}
  name = 'Angular ' + VERSION.major;
}
