import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseURL="http://localhost:8080/api/v1/requests";

  constructor(private httpClient:HttpClient) { }

  translateRequest(req: String,lang:String): Observable<string>{
    return this.httpClient.get(`${this.baseURL}/${req}/${lang}`, {responseType: 'text'});
  }
  
  
}
