import {Component, OnInit, Output} from '@angular/core';
import {PostsService} from "../service/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
      public postsService: PostsService,
      private router: Router
    ) {};

    ngOnInit(): void {
    };

    routerFunc(link) {
        this.router.navigate(link);
    }

}
