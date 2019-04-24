import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url:string='';

  constructor(private http:HttpClient) { }

  searchMovies(title:string, type:string){
    this.url =`${environment.apiURL}`;
  }

  geMovie(){}


}
