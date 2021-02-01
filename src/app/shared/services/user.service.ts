import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { apiUrls } from './api-url';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class userService {

    options = {
      headers :  new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': '*/*'
      })
    };

    constructor(private store: LocalStoreService, private http: HttpClient) {
    }

    getUser(): Observable<any> {
        // const token = this.store.getItem('token');
        return this.http.get(apiUrls.me);
    }

    updateUser(form): Observable<any> {
      const formData = new FormData();
      formData.append('fil123123e', form);
      console.log("---------acaaaaa---");
      console.log(apiUrls.upload);

      return this.http.post<any>(apiUrls.upload, formData);
  }


}
