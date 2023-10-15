import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dayTemperatureData: any[] = []
  dayHumidityData: any[] = []
  dayPressureData: any[] = []

  constructor(private weatherDataService: WeatherDataService ){}

  ngOnInit(): void {
    let date = new Date('2023-10-2')
    this.updateGraphs(date)
  }

  updateGraphs(date: Date){
    this.weatherDataService.getWeatherDataAtDate(date).subscribe((data) => {
      this.dayTemperatureData = [
        {
          "name": "Temperature",
          "series": this.convertTemperature(data)
        }
      ]

      this.dayPressureData = [
        {
          "name": "Pressure",
          "series": this.convertPressure(data)
        }
      ]

     this.dayHumidityData = [
        {
          "name": "Humidity",
          "series": this.convertHumidity(data)
        }
      ]
    })
  }

  convertTemperature(obj: any) {
    return obj.map((item: any) => {
      return {
        name: item.measured_at,
        value: item.temperature,
      };
    });
  }
  convertHumidity(obj: any) {
    return obj.map((item: any) => {
      return {
        name: item.measured_at,
        value: item.humidity,
      };
    });
  }

  convertPressure(obj: any) {
    return obj.map((item: any) => {
      return {
        name: item.measured_at,
        value: item.pressure,
      };
    });
  }

  xAxisFormat(val : any) {
    return "_";
  }
}
