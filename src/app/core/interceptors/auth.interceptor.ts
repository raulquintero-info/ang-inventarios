import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, finalize, tap } from "rxjs";
import { Router } from "@angular/router";
import { SecurityService } from "../auth/services/security.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private router = inject(Router)
  constructor(private loginService: SecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();
    let authReq = req;
    let ok: string;
    const token = this.loginService.getToken();
    if (token != null) {
      authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    console.log('cloned', authReq)

    return next.handle(authReq).pipe(
      tap({
        // Succeeds when there is a response; ignore other events
        next: (event:any) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        // Operation failed; error is an HttpErrorResponse
        error: (_error) => {
          ok = 'failed'
          console.log(_error)
          console.log(">>",this.router.url, _error.status)
          //cerrar sesion al expirar el token
          if(this.router.url!='/login' && _error.error.message == "401" ){
            // localStorage.clear();
            console.log('jwt invalido');
            console.log(_error.error);
            this.loginService.logout();
            this.router.navigateByUrl("expired-session")//, {skipLocationChange: true})
          }

          // if(_error.status==500 && _error.error.message != "401"){
          //   console.log('error 500')
          //   console.log(_error.error);

          //   this.router.navigateByUrl("expired-session")//, {skipLocationChange: true})

          // }
          // if(_error.status==401){
          //   this.router.navigateByUrl("not-authorized", {skipLocationChange: true})

          // }
        }
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"
           ${ok} in ${elapsed} ms.`;
        // this.messenger.add(msg);
        console.log(msg, ok);


        // setTimeout(() => {
        //   console.log('timer')
        // }, 10200);

      })
    );
  }


  // 400 Bad Request
  // 401 Unauthorized
  // 402 Payment Required
  // 403 Forbidden
  // 404 Not Found
  // 405 Method Not Allowed


} export const AuthInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
