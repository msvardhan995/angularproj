import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../api-response';
import { Marks } from '../marks';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit {

  sid: number;
  mark: Marks;
  apiResponse:ApiResponse;
  constructor(private route:ActivatedRoute, private router:Router, private markService:MarksService) { }

  ngOnInit(): void {
    this.mark = new Marks();

    this.sid = this.route.snapshot.params['sid'];
    this.markService.getMarks(this.sid)
      .subscribe(data => {
        console.log(data)
        //this.student = data;
      }, error => console.log(error));
  }
  onSubmit() {
    this.markService.updateMarks(this.sid, this.mark)
      .subscribe(data => console.log(data), error => console.log(error));
    this.mark = new Marks();
    this.router.navigate(['/marks']);
    }
    list(){
      this.router.navigate(['marks']);
    }

}
