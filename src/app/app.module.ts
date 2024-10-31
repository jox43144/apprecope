import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PrecioInternacionalComponent } from './components/precio-internacional/precio-internacional.component';
import { PreciosConsumidorComponent } from './components/precios-consumidor/precios-consumidor.component';
import { PreciosPlantelComponent } from './components/precios-plantel/precios-plantel.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecioInternacionalComponent,
    PreciosConsumidorComponent,
    PreciosPlantelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
