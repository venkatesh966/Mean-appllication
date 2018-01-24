import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { StudentService } from './student.service';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { LoginService } from './login/login.service';
import { AlbumComponent } from './album/album.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AlbumService } from './album/album.service';
import { StaticStudentsComponent } from './static-students/static-students.component';
import { StudentsService } from './static-students/students.service';
import { CustomerformComponent } from './customerform/customerform.component';
import { EditStaticstudentComponent } from './edit-staticstudent/edit-staticstudent.component';
import { GuardService } from './guard.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comments/commentservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommentInterceptor } from './comments/commentinterceptor';


const routes:Routes = [
  {path:'welcome', component: WelcomeComponent },
  {path:'login' , component:LoginComponent },
  {path:'album' , component:AlbumComponent },
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'show/:id', component:ShowComponent},
  {path:'student', component:StaticStudentsComponent},
  {path:'comments', component:CommentsComponent},
  {path:'customer',component:CustomerformComponent},
  {path:'student/:playerid',canActivate:[GuardService],component: EditStaticstudentComponent},//important playerid variable name
  {path:'**',component:LoginComponent}
  

];


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    
    ShowComponent,
    
    WelcomeComponent,
    
    LoginComponent,
    
    UsersComponent,
    
    AlbumComponent,
    
    StaticStudentsComponent,
    
    CustomerformComponent,
    
    EditStaticstudentComponent,
    
    CommentsComponent
  ],
  imports: [
    BrowserModule,CommonModule,Ng2PaginationModule,HttpClientModule, RouterModule.forRoot(routes),FormsModule,
    HttpModule
  ],
  providers: [StudentService,{provide:HTTP_INTERCEPTORS,useClass:CommentInterceptor,multi:true},CommentService,LoginService,AlbumService,StudentsService,GuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
