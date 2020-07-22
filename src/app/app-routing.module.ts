import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CategComponent } from './routes/categ/categ.component';
import { AddComponent } from './routes/users/add/add.component';
import { UsersComponent } from './routes/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'categ',
    component: CategComponent
  },
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'user/add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
