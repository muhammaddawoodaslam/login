import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';
import { apiUrls } from './api-url';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    // apiUrls.qa_url+'?has_data=true'
    get(url: string) {
        return this.http.get<any[]>(url);
    }
    post(url: string, data: any) {

        return this.http.post<any[]>(url, data);

    }

}
