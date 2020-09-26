import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService {
  private baseUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getMarksList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'marks');
  }
  createMarks(marks:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'marks',marks);
  }
  deleteMarks(sid:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/marks/${sid}`,{responseType:'text'});
  }
  getMarks(sid:number):Observable<object> {
    return this.http.get(`${this.baseUrl}/marks/${sid}`);

  }
  updateMarks(sid:number,value:any):Observable<object>{
    return this.http.post(`${this.baseUrl}/marks/${sid}`,value);
  }
}
