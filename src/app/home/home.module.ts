import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';1
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ CommonModule, ReactiveFormsModule, VMessageModule, RouterModule ]
})
export class HomeModule {

}