import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  content:object=null;

  constructor(private movieService:MovieService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.geMovie(id).subscribe(result=> {
      this.content=result;
    })
  }

}
