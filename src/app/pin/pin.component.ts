import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  @Output() pinOk = new EventEmitter<string>();

  numPin = '    ';
  indice = 0;
  isDisabled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  pushNumber(num:number){

  }

  onClickReset(){
  
  }

  onClickAceptar(){
  
  }
}
