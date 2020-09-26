import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreateMarksComponent } from './create-marks/create-marks.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ExamsListComponent } from './exams-list/exams-list.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'', redirectTo:'student', pathMatch:'full'},
  {path:'add', component:CreateStudentComponent},
  {path:'students', component:StudentsListComponent},
  {path:'update/id', component:UpdateStudentComponent},
  {path: 'exams-details', component:ExamsListComponent},
  {path: 'examadd', component:CreateExamComponent},
  {path:'marks-details',component:MarksListComponent},
  {path:'marksadd',component:CreateMarksComponent},
  {path:'update-marks/sid', component:UpdateMarksComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
