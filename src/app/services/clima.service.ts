import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url1='https://api.openweathermap.org/data/2.5/weather?q=';
  key='&appid=684a9d8dc19fbb1e8ad58a7052fc1d01';
  
  

  constructor( private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url1 + ciudad + this.key;
    return this.http.get(URL)
  }

}
