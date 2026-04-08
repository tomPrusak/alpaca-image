import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ImagesService } from '../../services/images-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-image-holder',
  imports: [AsyncPipe],
  templateUrl: './image-holder.html',
  styleUrl: './image-holder.css',
})
export class ImageHolder implements OnInit, OnChanges {
  defaultAlpaca$!: Observable<any>;

  constructor(
    public data: DataService,
    private imageService: ImagesService,
  ) {}

  ngOnInit(): void {
    this.defaultAlpaca$ = this.imageService.getDefaultImages();
    //  this.imageService.getDefaultImages().subscribe(val => {console.log(val)} )
  }
  ngOnChanges(): void {}
}
