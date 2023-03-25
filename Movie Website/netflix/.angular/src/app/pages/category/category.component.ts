import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  category:any

  constructor(private movie_service_child:MovieApiServiceService, private router:ActivatedRoute){}

  ngOnInit(): void {
    let get_parameter_id = this.router.snapshot.paramMap.getAll('education')
    console.log(get_parameter_id, 'getparamid#')
  }
}
