import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service'
import { Student } from '../student'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
     public studentService:StudentService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  student:Student;
  getStudent(){
    var id = this.route.snapshot.params['id'];
    this.studentService.getStudent(id)
        .subscribe(student=>{
          this.student = student;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }
}