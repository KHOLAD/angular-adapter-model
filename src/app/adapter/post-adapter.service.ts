import { Injectable } from '@angular/core';
import {Adapter} from './adapter';
import {PostModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostAdapterService implements Adapter<PostModel> {
  adapt(item: any): PostModel {
    return new PostModel(
      item.id,
      item.title,
      item.body
    );
  }
}
