import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  content = '';
  @Output() create = new EventEmitter<string>();

  submit() {
    if (this.content.trim()) {
      this.create.emit(this.content);
      this.content = '';
    }
  }
}