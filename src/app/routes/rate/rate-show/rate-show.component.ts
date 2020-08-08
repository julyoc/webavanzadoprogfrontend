import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rate-show',
  templateUrl: './rate-show.component.html',
  styleUrls: ['./rate-show.component.scss']
})
export class RateShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
