import { Component, OnInit } from '@angular/core';
import { PrecioInternacionalService } from '../../services/precio-internacional.service';
import { PrecioInternacional } from '../../models/precio-internacional';
@Component({
  selector: 'app-precio-internacional',
  templateUrl: './precio-internacional.component.html',
  styleUrls: ['./precio-internacional.component.css']
})
export class PrecioInternacionalComponent implements OnInit {
public precioInternacional: PrecioInternacional;
public titulo: string;
constructor(private precioInternacionalService: PrecioInternacionalService){
  this.titulo = 'Precio internacional';
}
ngOnInit(){
  this.precioInternacionalService.getPrecioInternacional().subscribe({next:
    (response) =>{
      this.precioInternacional = response;
    },
   error: (error) => {
      console.log(error);
    }
  }
  );
}
}
