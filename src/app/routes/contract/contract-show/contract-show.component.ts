import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contract-show',
  templateUrl: './contract-show.component.html',
  styleUrls: ['./contract-show.component.scss']
})
export class ContractShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
