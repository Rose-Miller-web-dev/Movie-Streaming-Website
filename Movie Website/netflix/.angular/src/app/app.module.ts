import { MovieApiServiceService } from './services/movie-api-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './netflix/netflix.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    HomeComponent,
    SearchComponent,
    MovieInfoComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
