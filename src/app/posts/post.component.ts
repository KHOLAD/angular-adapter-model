import {Component, Input} from '@angular/core';
import {PostModel} from '../models/post.model';

@Component({
  selector: 'app-post',
  template: `
    <mat-card>
    <mat-card-header>
      <mat-card-title>{{post?.title}}</mat-card-title>
    </mat-card-header>

    <mat-card-content>
      <p>{{post?.body}}</p>
    </mat-card-content>

    <mat-card-actions>
      <button color="primary" mat-flat-button>LIKE</button>
    </mat-card-actions>
  </mat-card>
  `
})
export class PostComponent {
  @Input() post: PostModel;
}
