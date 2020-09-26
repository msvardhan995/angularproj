import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getExamList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'exams');
  }
  createExam(exam:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'exam',exam);
  }
  getExam(id:String):Observable<object> {
    return this.http.get(`${this.baseUrl}/exams/${id}`);

  }
}
