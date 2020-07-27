import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  datapagelen = 3;
  fgroup: FormGroup;

  constructor() { 
    this.fgroup = new FormGroup({
      cantidad: new FormControl(this.datapagelen, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onsubmit() {
    this.datapagelen = this.fgroup.value.cantidad;
  }

}
