import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    return this.http.get(`${environment.api_base_url}/current.json`, {
      params: new HttpParams()
      .set('key', environment.api_key)
      .set('q', city)
    })
  }
}
