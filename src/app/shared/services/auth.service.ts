import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from "rxjs";
import { apiUrls } from './api-url';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  res: {};
  authenticated = false;
 

  constructor(private store: LocalStoreService, private router: Router, private http: HttpClient) {
    this.checkAuth();
  }
  options = {
    headers :  new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    })
  };
  
  checkAuth() {
    this.authenticated = this.store.getItem('logged');
  }

  getuser() {
    return of({});
  }

  signin(username,password) {
    return this.http.post(apiUrls.login, {
      username,password
    });
  }

  //  signUp() {
  //   return {
  //     "status": 200,
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2V4cGlyZWQiOmZhbHNlLCJhY2NvdW50X2xvY2tlZCI6ZmFsc2UsImlzX3Rlc3RfdXNlciI6ZmFsc2UsImlzX2Nvbm5lY3RlZCI6ZmFsc2UsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJwaG9uZTEiOiIiLCJyZWNvdmVyX2NvZGUiOjAsInJlY292ZXJfY29kZV9yZXRyeSI6MCwiYWdyZWUiOnRydWUsInBvbGl0aWNzIjp0cnVlLCJzdGF0dXMiOiJOT1RfVkFMSURBVEVEIiwiZGVzY3JpcHRpb24iOiIiLCJqb2IiOiIiLCJlZHVjYXRpb24iOiIiLCJyZWxhdGlvbnNoaXAiOiIiLCJpcCI6IiIsInZhbGlkYXRlZCI6IiIsImN1cnJlbnRMb2NhdGlvbiI6IiIsInZpc2libGUiOnRydWUsImFkbWluIjpmYWxzZSwic3RhdHVzX3BsYW4iOiJOT19QTEFCIiwibGFuZyI6ImVuIiwiaXNfcHJvZmlsZV9lZGl0YWJsZSI6dHJ1ZSwiaWQiOjQ1LCJmaXJzdF9uYW1lIjoiTWF0aWFzIiwibGFzdF9uYW1lIjoiQmFnbGllcmkiLCJwaG9uZSI6IjU0OTExMzc3MDMyMTAiLCJlbWFpbCI6Im1hdGlhczFAbWFpbGluYXRvci5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQwNk8xVG4uZ05LbzdlNEZYblYyOFZlUG1JcGdJUkxvRzdsMUZTNEQ1S0FDWk5EUXRwU1BLZSIsImxhdGl0dWRlIjowLCJsb25naXR1ZGUiOjAsImF2YXRhciI6Imh0dHBzOi8vZXZlcnl0aGluay5zZm8yLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL2ltZy9qZWRpX3dfMi5wbmciLCJmaXJlYmFzZV91aWQiOiJOT1RfSU1QTEVNRU5URUQiLCJ1cGRhdGVkQXQiOiIyMDIwLTA2LTI4VDA1OjA3OjU3LjAzN1oiLCJjcmVhdGVkQXQiOiIyMDIwLTA2LTI4VDA1OjA3OjU3LjAzN1oiLCJpYXQiOjE1OTMzMjA4NzcsImV4cCI6MTU5NTA0ODg3N30.Sj-JW_8TFrlMLrIJVJneuPTZ9jYhxGD-hG5-kQrzazs",
  //     "id_verif_phone": "5ef825ad50a50002353364a6",
  //     "data": {
  //         "email": "matias1@mailinator.com",
  //         "id": 45,
  //         "account_expired": false,
  //         "account_locked": false,
  //         "password_expired": false,
  //         "agree": true,
  //         "first_name": "Matias",
  //         "last_name": "Baglieri",
  //         "phone": "5491137703210",
  //         "phone1": "",
  //         "status": "NOT_VALIDATED",
  //         "avatar": "https://everythink.sfo2.cdn.digitaloceanspaces.com/img/jedi_w_2.png",
  //         "latitude": 0,
  //         "longitude": 0,
  //         "id_facebook": "",
  //         "config_user": {},
  //         "config_hai": {}
  //     }
  //   }
  //  }
  signUp(first_name, phone, email, last_name, password) {
    return this.http.post(apiUrls.createUser, {first_name, phone,email, last_name,password, id: 1
    }, this.options);
    }

  validatePhone(code, id) {
      return this.http.put(apiUrls.createUser, {
        code, id
      }, this. options);
    }

  buildUrl(id) {
    return 'http://inu.everythink.ai/api/users/' + id;
  }  

  newPhone(new_phone, id) {
    return this.http.post(this.buildUrl(id), this.options);
  }
  

   
  signout() {
    this.authenticated = false;
    this.store.clear()
    this.router.navigateByUrl("/sessions/signin");
  }
}
