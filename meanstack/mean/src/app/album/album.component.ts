import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  start:number;
  limit:number;
  list:IAlbum[];

  constructor(private _imageService: AlbumService) { 
    this.start=0;
    this.limit=10;
  }
  updateLimit(val)
  {
    this.start=0;
    this.limit=val;
    this.display();
  }
  display(){
    this._imageService.getImages(this.start, this.limit).subscribe((res:IAlbum[]) =>{
      this.list = res;
    });
   }
  ngOnInit() {
    this.display();
  }

}
