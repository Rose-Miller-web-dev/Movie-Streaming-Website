import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  base_url = "https://api.themoviedb.org/3"
  apikey = "08cc33bd5ae3a747598ce2ad84376e66"

  banner_api_data():Observable<any>{
    return this.http.get(`${this.base_url}/trending/all/week?api_key=${this.apikey}`)
  }

  trending_movie_api_data():Observable<any>{
    return this.http.get(`${this.base_url}/trending/movie/day?api_key=${this.apikey}`)
  }

  get_search_movie(data: any): Observable<any>{
    console.log(data, 'movie#')
    return this.http.get(`${this.base_url}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  get_movie_details(data:any):Observable<any>{
    return this.http.get(`${this.base_url}/movie/${data}?api_key=${this.apikey}`)
  }

  get_movie_video(data: any):Observable<any>{
    return this.http.get(`${this.base_url}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  get_movie_cast(data: any): Observable<any>{
    return this.http.get(`${this.base_url}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  fetch_action_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }

  fetch_advanture_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }

  fetch_comedy_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }

  fetch_animation_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }

  fetch_documentary_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }

  fetch_scifi_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }

  fetch_thriller_movie(): Observable<any>{
    return this.http.get(`${this.base_url}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }
}
