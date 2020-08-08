import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-status-show',
  templateUrl: './status-show.component.html',
  styleUrls: ['./status-show.component.scss']
})
export class StatusShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
