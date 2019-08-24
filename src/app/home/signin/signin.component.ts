import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput',{ static: true}) userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {  }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });        
    }

    login () {
        console.log('vai se autenticar');

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password)
            .subscribe(
                () => {
                    console.log('autenticado');
                    //redireciona para user/:userName
                    this.router.navigate(['user', userName]);
                }, err => {
                    console.log(err);
                    this.userNameInput.nativeElement.focus();
                    this.loginForm.reset();
                }
            );
    }


}