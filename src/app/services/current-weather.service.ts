import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Coords } from '../../structures/coords.structure';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject : Subject<any> = new Subject<any>();
  public weather$ : Observable<any> = this.weatherSubject.asObservable();

  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http : HttpClient) { 
    this.get({
      lat: 20.294583,
      lon: -102.711308
    });
  }

  get({lat, lon} : Coords){
    const args: string = `?lat=${lat}&lon=${lon}&appid=${environment.key}&units=metric`;
    let url = this.endpoint + args;

    if(isDevMode()) url = 'assets/weather.json';

    this.http.get(url).subscribe(this.weatherSubject);
  }
}
