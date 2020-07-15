import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {PostsService} from "../service/posts.service";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  @ViewChild('title', {static: false}) titleInput: InputComponent;
  @ViewChild('author', {static: false}) authorInput: InputComponent;
  // @ViewChild('date', {static: false}) dateInput: InputComponent;
  @ViewChild('img', {static: false}) imgInput: InputComponent;
  textInput = '';
  sourceInput = '';
  dateInput = '';

  constructor(
    private router: Router,
    public postsService: PostsService
  ) {}

  selectedSource = "All sources";

  ngOnInit(): void {
  }

  addNewPost() {
    let newPost = {
      id: Math.floor(Math.random() * 10000),
      source: this.sourceInput,
      img: this.imgInput.inputValue,
      author: this.authorInput.inputValue,
      title: this.titleInput.inputValue,
      text: this.textInput,
      date: this.dateInput
    }

    this.postsService.addNewPost(newPost);
    console.log(this.postsService.posts);
    this.router.navigate(['/']);
  }

}
