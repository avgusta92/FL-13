import { Component, OnInit } from '@angular/core';
import {PostsService} from "../service/posts.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  filterCheck = false;

  filterIcon = "search";

  inputValue = '';

  filterFunc() {
    this.postsService.filter(this.inputValue, this.filterCheck);
    this.filterIcon = !this.filterCheck ? "clear" : "search";
    this.filterCheck = !this.filterCheck;
  }

  onInput(event?: any) {
    this.inputValue = event.target.value;
  }

  ngOnInit(): void {
  }

}
