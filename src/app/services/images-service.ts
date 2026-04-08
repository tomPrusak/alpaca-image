import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ImagesInterface } from '../global/interface/images-interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private baseUrl = '../assets/json/images.json';
  private http = inject(HttpClient);

  getDefaultImages() {
    return this.http
      .get<ImagesInterface>(this.baseUrl)
      .pipe(map((res) => res.data.defaultAlpaca));
  }
}
