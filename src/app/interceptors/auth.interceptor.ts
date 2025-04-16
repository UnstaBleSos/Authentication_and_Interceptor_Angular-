import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const apiToken = localStorage.getItem("apiToken");
  if(apiToken){

    const clonedRequest= req.clone({
      setHeaders:{
        Authorization:`Bearer ${apiToken}`
      }
    })
    
    return next(clonedRequest);
  }

  return next(req);
};
