import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://images_vivimosdeviaje.storage.googleapis.com/20191006174029/Clima1.jpg';
  ciudad = '';
  clima = '';
  temperatura = 0;
  humedad = 0;
  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    console.log(this.ciudad);
    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
      this.clima = data.weather[0].main;
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
    })
  }

}
