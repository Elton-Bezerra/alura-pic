import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //recupera da rota, o pathVariable declarado no approutingmodule como userName, top!!
    const userName: string = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName).subscribe(photos => this.photos = photos);
  }
}
