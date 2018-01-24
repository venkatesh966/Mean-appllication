import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../static-students/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-staticstudent',
  templateUrl: './edit-staticstudent.component.html',
  styleUrls: ['./edit-staticstudent.component.css']
})
export class EditStaticstudentComponent implements OnInit {
  player:any;
  id:number;

  constructor(private _router: ActivatedRoute,private _StudentsService:StudentsService) { }

  ngOnInit(): void {
    this.id=this._router.snapshot.params["playerid"];
    this.player=this._StudentsService.getMembers().find(c => c.playerid == this.id);

  
  }
}
 

  


