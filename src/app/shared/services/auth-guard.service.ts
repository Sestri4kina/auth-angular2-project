import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { UserService } from 'app/shared/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let currentUserType = JSON.parse(localStorage.getItem('currentUser')).userType.toUpperCase();
    if (currentUserType === 'ADMIN') {
        return true;
    }
    if (currentUserType === 'USER') {
        alert("You're not allowed to visit this page");
        return false;
    }  
 
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}