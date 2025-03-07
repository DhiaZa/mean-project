import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  createPost(content: string) {
    this.postService.createPost(content).subscribe(() => this.loadPosts());
  }

  likePost(id: string) {
    this.postService.likePost(id).subscribe(() => this.loadPosts());
  }

}
