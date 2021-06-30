import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  // Database path

  // Save Data
  saveData(): void {
    // get list of post from post.service
    const listOfPosts: Post[] = this.postService.getPosts();
    // send list of to backend
    this.http
      .put(
        'https://live-posts-97d93-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => console.log(res));
  }
  // Fetch data
  fetchData(): void {
    this.http
      .get<Post[]>(
        'https://live-posts-97d93-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
