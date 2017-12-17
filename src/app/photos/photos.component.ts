import {Component, OnInit} from '@angular/core';
import {AllService} from '../all.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[];

  constructor(private all: AllService) {
  }

  ngOnInit() {
    this.all.getPhotos().subscribe((data: any[]) => this.photos = data);
  }

}
