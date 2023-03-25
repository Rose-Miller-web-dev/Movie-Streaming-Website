import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private movie_service_child:MovieApiServiceService, private router:Router){}

  action_movies:any[] = []
  comedy_movies:any[] = []
  advanture_movies:any[] = []
  documentary_movies:any[] = []
  scifi_movies:any[] = []
  thriller_movies:any[] = []
  animation_movies:any[] = []
  banner_result:any[] = []
  trending_movies_result:any[] = []
  category:any
  ngOnInit(): void {
    this.banner_data()
    this.trending_data()
    this.get_action()
    this.get_advanture()
    this.get_scifi()
    this.get_comedy()
    this.get_documentary()
    this.get_thriller()
    this.get_animation()
  }

  pass_by_rout_data(){
    this.router.navigate(['category'],{queryParams:{data:this.category}})
  }

  banner_data(){
    this.movie_service_child.banner_api_data().subscribe((result) => {
      console.log(result, 'bannerresult#')
      this.banner_result = result.results
    })
  }

  trending_data(){
    this.movie_service_child.trending_movie_api_data().subscribe((result) => {
      console.log(result, 'trendingresult#')
      this.trending_movies_result = result.results
    })
  }

  get_action(){
    this.movie_service_child.fetch_action_movie().subscribe((result) => {
      console.log(result, "action#")
      this.action_movies = result.results
    })
  }

  get_advanture(){
    this.movie_service_child.fetch_advanture_movie().subscribe((result) => {
      console.log(result, "advan#")
      this.advanture_movies = result.results
    })
  }

  get_documentary(){
    this.movie_service_child.fetch_documentary_movie().subscribe((result) => {
      console.log(result, "documentary#")
      this.documentary_movies = result.results
    })
  }

  get_comedy(){
    this.movie_service_child.fetch_comedy_movie().subscribe((result) => {
      console.log(result, "comedy#")
      this.comedy_movies = result.results
    })
  }

  get_scifi(){
    this.movie_service_child.fetch_scifi_movie().subscribe((result) => {
      console.log(result, "scifi#")
      this.scifi_movies = result.results
    })
  }

  get_thriller(){
    this.movie_service_child.fetch_thriller_movie().subscribe((result) => {
      console.log(result, "thriller#")
      this.thriller_movies = result.results
    })
  }

  get_animation(){
    this.movie_service_child.fetch_animation_movie().subscribe((result) => {
      this.animation_movies = result.results
    })
  }
}
