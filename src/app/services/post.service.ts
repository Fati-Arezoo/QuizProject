import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Posts } from './../shared/posts';
import { Post } from './../shared/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPosts(): Observable<Post[]> {
    return of(Posts);
  }

  getPost(id: number): Observable<Post> {
    return of(Posts.find((post) => post.id == id));
  }
}
