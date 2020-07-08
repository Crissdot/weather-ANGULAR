import { Component } from '@angular/core';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';

  constructor(public geolocationService : GeolocationService){}

  ngOnInit(){
    //this.forecastService.weather$.subscribe(console.log);
  }
}
