import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { HttpClient} from '@angular/common/http';
import { apiUrls } from './api-url';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})

export class NetworkService {
    
    
    constructor(private store: LocalStoreService, private http: HttpClient) {
    }
    

    getNetworks(): Observable<any> {
      return this.http.get(apiUrls.network_categories);
    }
    
    getCategories(id): Observable<any> {
      return this.http.get(apiUrls.networks(id));
    }

    getCommunities(key): Observable<any> {
      return this.http.get(apiUrls.communities(key));
    }

}
