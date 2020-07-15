import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../service/posts.service";
import {Post} from "../service/post.model";

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    private posts: PostsService
  ) {}

  ngOnInit(): void {
    this.post = this.posts.getById(+this.route.snapshot.params.id);
  }

}
