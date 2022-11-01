import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService){

  }
  
  cityName: string = 'Paris';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherDataInit(this.cityName);
    
  }
  onSubmit(form: NgForm){
    console.log(this.cityName);
    
    this.getWeatherData(form.value.city);
    
    this.cityName=form.value.name;
    

  }

  private getWeatherData(cityName : string){
    
      this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
         
        console.log(response);
      }
    })
    
    console.log(cityName);
    
  }

  private getWeatherDataInit(cityName : string){
    
      this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
         
        console.log(response);
      }
    })
    
    
  }
  title = 'WeatherApp';
}
