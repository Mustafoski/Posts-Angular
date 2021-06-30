import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Good Nature for hiking',
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
      ' test@test.com',
      new Date()
    ),
    new Post(
      'Hampi',
      'An amazing temple',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg',
      ' hampi@test.com',
      new Date()
    ),
    new Post(
      'Egypt',
      'Great place on Earth',
      'https://i.natgeofe.com/k/11c64d9e-7baa-44af-8589-726fcfef3f7c/egypt-pyramids.jpg',
      ' egypt@egypt.com',
      new Date()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
