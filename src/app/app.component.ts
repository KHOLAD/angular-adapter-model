import {Component, OnInit} from '@angular/core';
import {UsersService} from './users/users.service';
import {Observable, of} from 'rxjs';
import {UserModel} from './models/user.model';
import {PostModel} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  users$: Observable<UserModel[]> = of([]);
  post$: Observable<PostModel>;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.post$ = this.userService.getPosts();
  }
}
