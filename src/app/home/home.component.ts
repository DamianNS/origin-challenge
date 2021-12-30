import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetasService } from '../tarjetas.service';
import { Utils } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() cardOk = new EventEmitter<string>();

  numTarj:string = 'XXXXXXXXXXXXXXXX';
  isDisabled = false;
  indice=0;

  constructor(
    private _formBuilder: FormBuilder,
    private CardServ: TarjetasService
  ) { }

  ngOnInit(): void {
    this.setChar('_', this.indice);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  pushNumber(num:number){
    this.setChar( (num+1).toString(), this.indice );
    this.indice+=1;
    if(this.indice>15){
      this.indice=0;
      this.isDisabled = true;
      return;
    }
    this.setChar('_', this.indice);
  }

  setChar(char:string, index:number){
    this.numTarj = (new Utils()).setChar(this.numTarj, char, index);
  }

  onClickReset(){
    this.numTarj = 'XXXXXXXXXXXXXXXX';
    this.indice=0;
    this.isDisabled = false;
    this.setChar('_', 0);
  }

  async onClickAceptar(){
    console.log('onClickAceptar',this.numTarj);
    this.CardServ.isExist(this.numTarj).subscribe( (val:boolean) => {
      if( val ){
        console.log('await');
        this.cardOk.emit(this.numTarj);
      }else{
        console.log('else');
        this.onClickReset();
        alert("La tarjeta no existe");
      }  
    }, (error:HttpErrorResponse) => {
      console.log('onClickAceptar error:', error);
      this.onClickReset();
      if(error.status == 404){
        alert('La tarjeta no existe');
      }else if(error.status == 400){
        alert('La tarjeta esta bloqueada');
      }else{
        alert(error.message);
      }
      
    }
    );
  }
}