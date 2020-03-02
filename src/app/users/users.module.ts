import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [UserListComponent],
  exports: [
    UserListComponent
  ],
  imports: [CommonModule, MatListModule, MatIconModule]
})
export class UsersModule { }
