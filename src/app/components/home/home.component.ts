import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [WeatherService]
})
export class HomeComponent implements OnInit {

  city_name: string = 'Sofia';
  weather_data: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.city_name);
    this.city_name = '';
  }

  onSubmit() {
    this.getWeatherData(this.city_name);
    this.city_name = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getCurrentWeather(city)
      .subscribe(res => {
        this.weather_data = res;
      });
  }

}
