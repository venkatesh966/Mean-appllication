import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service'
import { Student } from '../student'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
     public StudentService:StudentService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getStudent();
  }

  model = new Student();
  id = this.route.snapshot.params['id'];
  
  getStudent(){
    this.StudentService.getStudent(this.id)
        .subscribe(student=>{
          this.model = student;
        })
  }

  updateStudent(){
    this.StudentService.updateStudent(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}