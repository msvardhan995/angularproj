import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-create-marks',
  templateUrl: './create-marks.component.html',
  styleUrls: ['./create-marks.component.css']
})

export class CreateMarksComponent implements OnInit {
  marks:Marks =new Marks();
  submitted=false;
  constructor(private marksService:MarksService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this.marksService.createMarks(this.marks).subscribe(
      data=>console.log(data), error=>console.log(error)
    );
    this.marks=new Marks();
    this.router.navigate(['/marks']);
  }

}
