import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subcateg-show',
  templateUrl: './subcateg-show.component.html',
  styleUrls: ['./subcateg-show.component.scss']
})
export class SubcategShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
