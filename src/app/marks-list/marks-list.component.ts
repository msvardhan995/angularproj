import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  marks:Observable<any>;
  deleteMessage=false;
  constructor(private router:Router, private marksService:MarksService) { }

  ngOnInit(): void {
  }
  deleteMarks(sid: number) {  
    console.log("Trying to delete marks with : "+sid);
    this.marksService.deleteMarks(sid)  
      .subscribe(  
        data => {  
          console.log("aaaa data : "+data);  
         this.deleteMessage=true;  
          this.marksService.getMarksList().subscribe(data =>{  
            console.log("bbbb data : "+data)
            this.marks =data  
            })  
        },  
        error => console.log(error));  
  }
    updateMarks(sid: number){
      this.router.navigate(['update-marks', sid]);
    }

}

