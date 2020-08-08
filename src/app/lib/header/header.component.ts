import { Component, OnInit } from '@angular/core';
import { faHome, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icons = {
    home: faHome,
    edit: faEdit
  }

  constructor() { }

  ngOnInit(): void {
  }

}
