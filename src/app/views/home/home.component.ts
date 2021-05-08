import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EstadoService } from 'src/app/service/estado.service';
import { Distrito } from 'src/model/distrito.model';
import { Estado } from 'src/model/estado.model';
import { Municipio } from 'src/model/municipio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estados: Estado[] = []
  municipios: Municipio[] = []
  distritos: Distrito[] = []
  
  selectedDevice: any

  constructor(private estadoService: EstadoService) {
    
  }

  ngOnInit(): void {
    this.estadoService.read().subscribe(estados => {
      this.estados = estados
    })
  }
  onChangeSelectEstado(event: Event): void{
    this.selectedDevice=event;
    console.log(this.selectedDevice.target.value)
    this.estadoService.readMunicipio(this.selectedDevice.target.value).subscribe(municipios => {
      this.municipios = municipios
    })
  }

  onChangeSelectMunicipio(event: Event): void{
    this.selectedDevice=event;
    
    this.estadoService.readDistrito(this.selectedDevice.target.value).subscribe(distritos => {
      this.distritos = distritos
    })
  }

  

}
