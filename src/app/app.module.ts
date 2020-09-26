import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamsListComponent } from './exams-list/exams-list.component';
import { ExamService } from './exam.service';
import { CreateMarksComponent } from './create-marks/create-marks.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { UpdateMarksComponent } from './update-marks/update-marks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentsListComponent,
    CreateExamComponent,
    ExamsListComponent,
    CreateMarksComponent,
    MarksListComponent,
    UpdateMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [StudentService, ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
