import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-static-students',
  templateUrl: './static-students.component.html',
  styleUrls: ['./static-students.component.css']
})
export class StaticStudentsComponent implements OnInit {

  members:any[];
  private _service:StudentsService;
  constructor( _student:StudentsService) { 
    this._service=_student;
  }

  ngOnInit() {
    this.members=this._service.getMembers();
    
  }

}
