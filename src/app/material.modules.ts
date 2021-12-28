import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {CdkStepperModule} from '@angular/cdk/stepper';

import { NgModule } from '@angular/core';

@NgModule({  
  exports: [
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    CdkStepperModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule {}