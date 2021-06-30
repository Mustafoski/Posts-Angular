import { Router } from '@angular/router';
import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index?: number;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.postService.deletePost(this.index);
  }
  onEdit(): void {
    this.router.navigate(['/post-edit', this.index]);
  }

  likePost(): void {
    this.postService.likePost(this.index);
  }
}
