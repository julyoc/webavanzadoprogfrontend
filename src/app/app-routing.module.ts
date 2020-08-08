import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CategComponent } from './routes/categ/categ.component';
import { ContractComponent } from './routes/contract/contract.component';
import { CreatorComponent } from './routes/creator/creator.component';
import { RateComponent } from './routes/rate/rate.component';
import { StatuComponent } from './routes/statu/statu.component';
import { SubcategComponent } from './routes/subcateg/subcateg.component';
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
  },
  {
    path: 'subcateg',
    component: SubcategComponent
  },
  {
    path: 'rate', 
    component: RateComponent
  },
  {
    path: 'status',
    component: StatuComponent
  },
  {
    path: 'creator',
    component: CreatorComponent
  },
  {
    path: 'contract',
     component: ContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
