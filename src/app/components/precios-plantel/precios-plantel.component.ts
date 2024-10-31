import { Component, OnInit } from '@angular/core';
import { PreciosCombustiblesService } from '../../services/precios-combustibles.service';
import { PreciosCombustibles } from '../../models/precios-combustibles';

@Component({
  selector: 'app-precios-plantel',
  templateUrl: './precios-plantel.component.html',
  styleUrl: './precios-plantel.component.css'
})
export class PreciosPlantelComponent {
  public preciosPlantel: PreciosCombustibles[];
  constructor(private preciosCombustibleService: PreciosCombustiblesService) { }
  ngOnInit(): void {
    this.preciosCombustibleService.getPreciosPlantel().subscribe(
      (response) =>{
        this.preciosPlantel = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
