import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardMaskPipePipe } from './credit-card-mask-pipe.pipe';
import { PinComponent } from './pin/pin.component';
import { TecladoComponent } from './teclado/teclado.component';
import { PinMaskPipe } from './pin-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditCardMaskPipePipe,
    PinComponent,
    TecladoComponent,
    PinMaskPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
