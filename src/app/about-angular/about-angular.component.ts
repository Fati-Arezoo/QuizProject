import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { PostService } from './../services/post.service';
import { Posts } from './../shared/posts';
import { Post } from './../shared/post';

@Component({
  selector: 'app-about-angular',
  templateUrl: './about-angular.component.html',
  styleUrls: ['./about-angular.component.scss'],
})
export class AboutAngularComponent implements OnInit {
  posts: Post[] = Posts;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => (this.posts = posts));
  }
}
