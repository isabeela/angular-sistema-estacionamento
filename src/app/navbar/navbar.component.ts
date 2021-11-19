import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  date: string;
  hours: any;
  minutes: any;
  seconds: any;
  currentLocale: any;

  isTwelveHrFormat: false;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {}
}
