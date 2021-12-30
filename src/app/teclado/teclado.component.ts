import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent implements OnInit {
  @Output() pushKey = new EventEmitter<number>();

  isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  pushNumber(num:number){
    this.pushKey.emit(num);
  }
}
