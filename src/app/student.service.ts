import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getStudentList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'students');
  }
  createStudent(student:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'student',student);
  }
  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/student/${id}`,{responseType:'text'});
  }
  getStudent(id:number):Observable<object> {
    return this.http.get(`${this.baseUrl}/students/${id}`);

  }
  updateStudent(id:number,value:any):Observable<object>{
    return this.http.post(`${this.baseUrl}/student/${id}`,value);
  }
}
