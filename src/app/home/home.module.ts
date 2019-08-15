import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';1
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ CommonModule, ReactiveFormsModule ]
})
export class HomeModule {

}