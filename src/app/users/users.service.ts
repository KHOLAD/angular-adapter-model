import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {PostAdapterService} from '../adapter/post-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private postAdapter: PostAdapterService
  ) { }
  // Static class method adapter
  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((data: any[]) => data.map(UserModel.adapt)));
  }
  // Service class adapter
  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(map((data: any) => this.postAdapter.adapt(data)));
  }
}
