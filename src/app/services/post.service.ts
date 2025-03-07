import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPost(content: string): Observable<any> {
    return this.http.post(this.apiUrl, { content });
  }

  likePost(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/like`, {});
  }

  commentPost(id: string, comment: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/comment`, { comment });
  }
}
