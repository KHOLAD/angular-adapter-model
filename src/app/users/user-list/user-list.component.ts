import {Component, Input} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <mat-list *ngIf="users && users.length > 0">
      <h3 mat-subheader>Users</h3>
      <mat-list-item *ngFor="let user of users">
        <mat-icon mat-list-icon>person</mat-icon>
        <h4 mat-line>{{user.name}} / ID: {{user.id}} </h4>
        <p mat-line>Username - {{user.username}} </p>
        <p mat-line>Email - {{user.email}} </p>
        <p mat-line>Street - {{user.street}} </p>
      </mat-list-item>
    </mat-list>
  `
})
export class UserListComponent {
  @Input() users: UserModel[]  = [];
}
