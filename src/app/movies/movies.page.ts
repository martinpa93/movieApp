import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IMovies } from '../model/IMovies.interface';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
