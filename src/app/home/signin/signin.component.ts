import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platfor-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput',{ static: true}) userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, 
        private authService: AuthService, 
        private router: Router, 
        private plaformDetectorService: PlatformDetectorService) {  }
    
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
                    this.loginForm.reset();
                    // se for verdadeiro faz o and, TOP, nem sabia disso...
                    this.plaformDetectorService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus();
                    
                }
            );
    }


}