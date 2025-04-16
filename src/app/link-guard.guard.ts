  import { inject, Injectable } from '@angular/core';
  import { CanActivateFn } from '@angular/router';
  import { Router } from '@angular/router';
  export const linkGuardGuard: CanActivateFn = (route, state) => {
    const value = localStorage.getItem("apiToken")
    if(value){
      return true;
    }
  else{
    const router= inject(Router);
    router.navigate([''])
    return false;
  }
  };