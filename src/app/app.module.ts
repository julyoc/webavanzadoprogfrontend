import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategComponent } from './routes/categ/categ.component';
import { CategService } from './routes/categ/categ.service';
import { UsersComponent } from './routes/users/users.component';
import { UsersService } from './routes/users/users.service';
import { AddComponent } from './routes/users/add/add.component';
import { UserviewComponent } from './routes/users/userview/userview.component';
import { CategShowComponent } from './routes/categ/categ-show/categ-show.component';
import { SubcategComponent } from './routes/subcateg/subcateg.component';
import { RateComponent } from './routes/rate/rate.component';
import { ContractComponent } from './routes/contract/contract.component';
import { StatuComponent } from './routes/statu/statu.component';
import { CreatorComponent } from './routes/creator/creator.component';
import { ContractShowComponent } from './routes/contract/contract-show/contract-show.component';
import { CreatorShowComponent } from './routes/creator/creator-show/creator-show.component';
import { RateShowComponent } from './routes/rate/rate-show/rate-show.component';
import { StatusShowComponent } from './routes/statu/status-show/status-show.component';
import { SubcategShowComponent } from './routes/subcateg/subcateg-show/subcateg-show.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CategComponent,
    UsersComponent,
    AddComponent,
    UserviewComponent,
    CategShowComponent,
    SubcategComponent,
    RateComponent,
    ContractComponent,
    StatuComponent,
    CreatorComponent,
    ContractShowComponent,
    CreatorShowComponent,
    RateShowComponent,
    StatusShowComponent,
    SubcategShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    CategService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
