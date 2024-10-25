import { Component, OnInit } from '@angular/core';
import { PreciosCombustiblesService } from '../../services/precios-combustibles.service';
import { PreciosCombustibles } from '../../models/precios-combustibles';

@Component({
  selector: 'app-precios-consumidor',
  templateUrl: './precios-consumidor.component.html',
  styleUrl: './precios-consumidor.component.css'
})
export class PreciosConsumidorComponent implements OnInit {
  public preciosConsumidor: PreciosCombustibles[];
  constructor(private preciosCombustibleService: PreciosCombustiblesService) { }

  ngOnInit(): void {
    this.preciosCombustibleService.getPreciosConsumidor().subscribe(
      (response) =>{
        this.preciosConsumidor = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
