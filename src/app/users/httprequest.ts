import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class HTTPTestService {
  constructor (private _http:Http){

  }
  getjsondata(){
    return this._http.get('assets/admin.json')
      .map(res=>res.json());
  }

}
