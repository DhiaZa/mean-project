import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mini Réseau Social';
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  createPost(content: string): void {
    this.postService.createPost(content).subscribe(post => {
      this.posts.push(post);
    });
  }

  likePost(postId: string): void {
    this.postService.likePost(postId).subscribe(post => {
      const index = this.posts.findIndex(p => p._id === post._id);
      if (index !== -1) {
        this.posts[index].likes = post.likes;
      }
    });
  }

  addComment(postId: string, comment: string): void {
    this.postService.commentPost(postId, comment).subscribe(post => {
      const index = this.posts.findIndex(p => p._id === post._id);
      if (index !== -1) {
        this.posts[index].comments = post.comments;
      }
    });
  }
}
