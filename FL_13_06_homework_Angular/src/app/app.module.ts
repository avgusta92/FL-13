import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { HeaderComponent } from './header/header.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { NewsViewComponent } from './news-view/news-view.component';
import {PostsService} from "./service/posts.service";


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ButtonComponent,
    DropdownComponent,
    NewsItemComponent,
    HeaderComponent,
    CreateNewsComponent,
    HomeComponent,
    InputComponent,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
