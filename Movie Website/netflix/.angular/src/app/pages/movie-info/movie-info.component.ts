import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit{

  constructor(private movie_api_child :MovieApiServiceService, private router: ActivatedRoute){}
  movie_info:any
  movie_video: any
  movie_cast: any
  ngOnInit(): void {
    let get_parameter_id = this.router.snapshot.paramMap.get('id')
    console.log(get_parameter_id, 'getparamid#')

    this.get_movie_info(get_parameter_id)
    this.get_video(get_parameter_id)
    this.get_cast(get_parameter_id)
  }

  get_movie_info(id:any){
    this.movie_api_child.get_movie_details(id).subscribe((result) => {
      console.log(result, 'getmovieinfo#')
      this.movie_info = result
      //console.log(this.movie_info, 'this.movie_info#')
    })
  }

  get_video(id: any){
    this.movie_api_child.get_movie_video(id).subscribe((result) => {
      this.movie_video = result
      console.log(result, 'movie_video#')
      result.results.forEach((element: any )=> {
        if(element.type == 'Trailer'){
          this.movie_video = element.key
        }       
      });
    })
  }

  get_cast(id: any){
    this.movie_api_child.get_movie_cast(id).subscribe((result) => {
      this.movie_cast = result.cast
      console.log(result, 'movie_cast#')
    })
  }
}
