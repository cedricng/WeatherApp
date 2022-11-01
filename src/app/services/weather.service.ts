import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private Http: HttpClient) {

    
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.Http.get<WeatherData>(environment.weatherApiBaseUrl+'/'+cityName,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,
        environment.XRapidAPIKeyHeaderValue),
      
      /*.set('q', cityName)
      .set('units','metric')
      .set('mode','json')*/
    }).pipe(share());
  }
}
