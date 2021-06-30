import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    // new Post(
    //   'Nature',
    //   'Good Nature for hiking',
    //   'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
    //   ' test@test.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Hampi',
    //   'An amazing temple',
    //   'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg',
    //   ' hampi@test.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'Egypt',
    //   'Great place on Earth',
    //   'https://i.natgeofe.com/k/11c64d9e-7baa-44af-8589-726fcfef3f7c/egypt-pyramids.jpg',
    //   ' egypt@egypt.com',
    //   new Date(),
    //   4
    // ),
  ];

  getPosts(): any {
    return this.listOfPosts;
  }
  deletePost(index: number): any {
    this.listOfPosts.splice(index, 1);
  }
  addPost(post: Post): any {
    this.listOfPosts.push(post);
  }
  updatePost(index: number, post: Post): any {
    this.listOfPosts[index] = post;
  }
  getPost(index: number): any {
    return this.listOfPosts[index];
  }
  likePost(index: number): any {
    this.listOfPosts[index].numberOfLikes += 1;
  }
  setPosts(listOfPosts: Post[]): any {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
