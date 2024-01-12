// post.component.ts

import { Component, Input, OnInit } from '@angular/core';

import { PostServiceComponent } from '../../services/post-service/post-service.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any; // Change 'any' to a more specific type if possible

  constructor(private postService: PostServiceComponent) {}

  ngOnInit(): void {}
}
