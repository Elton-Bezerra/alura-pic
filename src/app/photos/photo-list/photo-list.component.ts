import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  

  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //recupera do resolver mapeado no approuting o campo photos, top
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

}
