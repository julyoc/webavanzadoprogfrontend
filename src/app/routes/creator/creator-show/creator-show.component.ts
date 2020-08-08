import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creator-show',
  templateUrl: './creator-show.component.html',
  styleUrls: ['./creator-show.component.scss']
})
export class CreatorShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
