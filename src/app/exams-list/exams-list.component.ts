import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ExamService } from '../exam.service';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {

  exams:Observable<any>;
  deleteMessage=false;
  constructor(private router:Router, private examService:ExamService) { }

  ngOnInit(): void {
  }
}
