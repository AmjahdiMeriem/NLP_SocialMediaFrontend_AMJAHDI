import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opinion3 } from './opinion3';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private baseURL = "http://localhost:8080/api/v1/opinions";

  constructor(private httpClient: HttpClient) { }

  getOpinions2(req: String, site: String, nbr: number): Observable<Opinion3> {
    return this.httpClient.get<Opinion3>(`${this.baseURL}/${req}/${site}/${nbr}`);
  }

  downloadOpinions(opinions: Opinion3[], req: String): Observable<object> {
    return this.httpClient.post(`${this.baseURL}/${req}`, opinions);
  }

  calculateScores(opi: Opinion3[]): Observable<number[]> {
    console.log("yes3");
    return this.httpClient.post<number[]>(`${"http://localhost:8080/api/v1/sentiment"}`, opi);
  }

  sentimentOpinion(opi: Opinion3[]): Observable<Opinion3[]> {
    console.log("yes4");
    return this.httpClient.post<Opinion3[]>(`${"http://localhost:8080/api/v1/sentiment/comments"}`,opi);
  }

  sentimentOpinions(): Observable<string>{
    console.log("yes5");
    return this.httpClient.get(`${"http://localhost:8080/api/v1/sentiment"}`, {responseType: 'text'});
  }

  summaryOpinions(opinions: Opinion3[], polarity: String,transReq:String): Observable<string>{
    console.log("meriemanameriem");
    return this.httpClient.post(`${"http://localhost:8080/api/v1/summary"}/${polarity}/${transReq}`, opinions, {responseType: 'text'});
  }

}
