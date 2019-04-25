import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IMovies } from '../model/IMovies.interface';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url:string='';

  constructor(private http:HttpClient) { }

  searchMovies(title:string, type:string){
    this.url =`${environment.apiURL}&type=movie&s=${encodeURI(title)}`;
    return this.http.get<IMovies>(this.url).pipe(map(results=>results['Search']));
  }

  geMovie(id:string){
    return this.http.get<IMovies>(`${environment.apiURL}&i=${id}&plot=full`)
  }


}
