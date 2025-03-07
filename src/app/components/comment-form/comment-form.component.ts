import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})
export class CommentFormComponent {
  comment = '';
  @Output() addComment = new EventEmitter<string>();

  submit() {
    if (this.comment.trim()) {
      this.addComment.emit(this.comment);
      this.comment = '';
    }
  }
}