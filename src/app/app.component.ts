import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepper') stepper!:MatStepper;

  title = 'origin-front';

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  onCardOk(id:string){
    this.stepper.next();
  }

  onPinOk(pin:string){

  }
}
