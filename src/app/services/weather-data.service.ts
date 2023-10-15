import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherDataAtDate(date: Date):Observable<any[]>{
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return this.http.get<any>(`http://downeypi.local:5000/api/weather_data/get/${year}-${month}-${day}`, {});
  }

  getWeatherDataNotSend():Observable<any[]>{
    return this.http.get<any>('http://downeypi.local:5000/api/weather_data/get/not-send', {});
  }
}
