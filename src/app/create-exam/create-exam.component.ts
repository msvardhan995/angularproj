import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  exam:Exam = new Exam();
  submitted=false;
  constructor(private router:Router , private examService:ExamService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.examService.createExam(this.exam).subscribe(
      data=>console.log(data), error=>console.log(error)
    );
    this.exam=new Exam();
    this.router.navigate(['/exams']);

}
}
