import { Component, OnInit, Inject } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  data: Users[];
  longitud: number;
  page = 1;

  constructor(@Inject(UsersService) private userdata: UsersService) { }

  ngOnInit(): void {
    this.userdata.getAll().subscribe(value => {
      this.data = value;
      this.longitud = Math.floor(value.length/10)+1;
    });
  }

}
