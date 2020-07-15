import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNewsComponent} from "./create-news/create-news.component";
import {HomeComponent} from "./home/home.component";
import {NewsViewComponent} from "./news-view/news-view.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateNewsComponent},
  {path: 'view/:id', component: NewsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
