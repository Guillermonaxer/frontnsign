import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from'rxjs';
import { global } from "./global";

@Injectable()


export class UserService{
public url:string
constructor(

    public _http:HttpClient

){this.url = global.url

}
test(){
    return "Hola mundo desde un servicio!!";
}

getanswers():Observable<any>{


return this._http.get(this.url)

}

}