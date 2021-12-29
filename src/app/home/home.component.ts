import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numTarj:string = 'XXXXXXXXXXXXXXXX';
  isDisabled = false;
  indice=0;

  constructor(
    private _formBuilder: FormBuilder
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
    if(index == 0){
      let numTarjAux = this.numTarj.slice(1);
      this.numTarj = char+numTarjAux;      
    }else if(index == 15){
      let numTarjAux = this.numTarj.substring(0,15);
      this.numTarj = numTarjAux+char;
    }else{      
      let numTarjAux1 = this.numTarj.substring(0,index);
      let numTarjAux2 = this.numTarj.slice(index+1);
      this.numTarj = numTarjAux1+char+numTarjAux2;      
    }    
  }

  onClickReset(){
    this.numTarj = 'XXXXXXXXXXXXXXXX';
    this.indice=0;
    this.isDisabled = false;
    this.setChar('_', 0);
  }

  onClickAceptar(){
    
  }
}