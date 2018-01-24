import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service'
import { Student } from '../student'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public studentService:StudentService
  ) { }

  ngOnInit() {
    this.getStudents();
  }
  student:Student;
  getStudents(){
    this.studentService.getStudents()
        .subscribe(student=>{
          this.student = student;
        })
  }
  
  deleteStudent(id){
    this.studentService.deleteStudent(id)
      .subscribe(()=>{
        this.getStudents();
      });
  }
}