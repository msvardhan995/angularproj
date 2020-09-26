import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api-response';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students:Observable<ApiResponse>;
  deleteMessage=false;
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.students=this.studentService.getStudentList();
  }
  // deleteStudent(id: number){
  //   this.studentService.deleteStudent(id).subscribe(
  //     data=>{console.log(data);
  //     this.students=this.studentService.getStudentList();},
  //     error => console.log(error));
  //   }
  deleteStudent(id: number) {  
    console.log("Trying to delete student with : "+id);
    this.studentService.deleteStudent(id)  
      .subscribe(  
        data => {  
          console.log("aaaa data : "+data);  
         this.deleteMessage=true;  
          this.studentService.getStudentList().subscribe(data =>{  
            console.log("bbbb data : "+data)
            this.students =data  
            })  
        },  
        error => console.log(error));  
  }
    updateStudent(id: number){
      this.router.navigate(['update-student', id]);
    }

}
