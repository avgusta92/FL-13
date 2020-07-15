import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../service/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  constructor(private router: Router) {  }

  @Input() post: Post

  now: Date = new Date();

  @Output() linkClickFunk = new EventEmitter();


  ngOnInit(): void {
  }

}
