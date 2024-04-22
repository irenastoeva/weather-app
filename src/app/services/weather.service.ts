import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  api_base_url = 'http://api.weatherapi.com/v1';
  api_key ='caa9b3bb7ea946b1ba5122924241904';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    return this.http.get(`${this.api_base_url}/current.json`, {
      params: new HttpParams()
      .set('key', this.api_key)
      .set('q', city)
    })
  }
}
