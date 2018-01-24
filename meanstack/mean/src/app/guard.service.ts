import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class GuardService {

  constructor(private _router:Router) { }
  canActivate(route : ActivatedRouteSnapshot) : boolean {
    let id= +route.url[1].path;
    if(id>10){
      alert("invalidId");
      this._router.navigate(['/student']);
      return false;
    }
    else{
      return true;
    }

  }

}
