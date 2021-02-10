import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Posts } from './../shared/posts';
import { PostService } from './../services/post.service';
import { Post } from './../shared/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((post) => (this.post = post));
  }

  goBack(): void {
    this.location.back();
  }
}
