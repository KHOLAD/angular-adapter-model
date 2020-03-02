import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import { PostAdapter } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private postAdapter: PostAdapter
  ) { }
  // Static class method adapter
  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((data: any[]) => data.map(UserModel.adapt)));
  }
  // Service injectable model class adapter
  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(map((data: any) => this.postAdapter.adapt(data)));
  }
}
