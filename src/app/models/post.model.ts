import { Injectable } from '@angular/core';
import {Adapter} from '../adapter/adapter';

export class PostModel {
  constructor(
    public id: string | null = null,
    public title: string | null = null,
    public body: string | null = null
  ) { }
}

@Injectable({ providedIn: 'root' })
export class PostAdapter implements Adapter<PostModel> {
  adapt(item: any): PostModel {
    return new PostModel(item.id, item.title, item.body);
  }
}
