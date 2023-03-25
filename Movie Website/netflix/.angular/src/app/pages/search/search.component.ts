import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private movie_service_child: MovieApiServiceService){}

  search_result: any
  search_form = new FormGroup({
    'movieName' : new FormControl(null)
  })

  submitForm(){
    console.log(this.search_form.value, 'searchform#')
    this.movie_service_child.get_search_movie(this.search_form.value).subscribe((result) =>{
      console.log(result, 'searchmovie#')
      result.results.forEach((element: any )=> {
        if(element.overview.length + element.original_title.length > 200){
          const ezafe = element.overview.length + element.original_title.length - 200
          const remove = element.overview.length - ezafe
          element.overview = element.overview.substring(0,remove)
          element.overview += '...'
        }

        else if(element.overview.length + element.original_title.length < 200){
          const kam =  200 - element.overview.length - element.original_title.length
          for(var i = 0; i < kam; i++){
            element.overview += " "
          } 
        } 

        if(element.original_title.length > 31){
          element.overview = element.overview.substring(0,50)
          element.overview += '...'
        }
      });

      this.search_result = result.results
    })
    
  }
}
