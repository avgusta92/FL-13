import { Component, OnInit } from '@angular/core';
import {PostsService} from "../service/posts.service";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  selectedSource = "All sources";

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

}
