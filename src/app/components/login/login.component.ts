import { NgClass, NgIf } from '@angular/common';
import { Component, Inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  profile= new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',Validators.required)
  })
  
  constructor(private authService:AuthService, private router:Router){
    console.log(authService,"HELLO")
  }
  handleSubmit(){
    const email = this.profile.value.email! 
    const password= this.profile.value.password!
    console.log(email,password)
    this.authService.login(email, password).subscribe({
      next: res => (
        localStorage.setItem("apiToken",res.token),
        this.router.navigate(['/cart'])
        
    ),
      error: err => {
        console.error(err);
        console.log(err.error);
      } 
      
      
    }
  );
  }
}
