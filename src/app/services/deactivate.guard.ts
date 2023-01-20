import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(component: IDeactivateComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit ? component.canExit() : true;
  }

}
