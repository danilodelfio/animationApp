import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
        return true;
    }
    alert('You have to signin');
    this.route.navigate(['/login']);
    return false;
  }
}
