import { CategoryComponent } from './pages/category/category.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id', component:MovieInfoComponent},
  {path:'category', component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
