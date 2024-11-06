import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { SecurityService } from '../auth/services/security.service';


export const empleadosGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)
  const securityService = inject(SecurityService);
  let role: string =""

  console.log('empleadosGuard')
      // securityService.checkStatus().subscribe();
      securityService.user.subscribe(
        currentUser=>{
          role = currentUser.role;
        }
      );
      if(role=="EMPLEADO"){
        return true;
      }

      router.navigateByUrl("not-authorized", {skipLocationChange: true});
      // router.navigate(['not-authorized']);
      return false;



  }
