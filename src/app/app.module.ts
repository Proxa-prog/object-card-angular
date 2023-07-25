import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectCardComponent } from './components/object-card/object-card.component';
import {Swiper} from "./components/swiper/swiper.component";
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    AppComponent,
    ObjectCardComponent,
    Swiper,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
