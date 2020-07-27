import { Component, OnInit, Inject, OnChanges, Input } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit, OnChanges {

  @Input() datapagelen: any;
  data: Users[];
  longitud: number;
  page = 1;
  constructor(@Inject(UsersService) private userdata: UsersService) { }

  ngOnInit(): void {
    console.log(this.datapagelen);
    this.userdata.getAll().subscribe(value => {
      this.data = value;
      this.longitud = Math.floor(value.length/this.datapagelen)+1;
      console.log(value);
    });
  }

  ngOnChanges() {
    this.longitud = Math.floor(this.data.length/this.datapagelen)+1;
  }

}
