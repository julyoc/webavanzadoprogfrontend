import { Component, OnInit, Inject } from '@angular/core';
import { CategService, categ } from '../categ.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categ-show',
  templateUrl: './categ-show.component.html',
  styleUrls: ['./categ-show.component.scss']
})
export class CategShowComponent implements OnInit {

  icons = {
    edit: faEdit,
    trush: faTrash
  }
  categ: categ[];
  constructor(@Inject(CategService) private categserv: CategService) { }

  ngOnInit(): void {
    this.categserv.getAllCateg().subscribe(value => {
      console.log(value);
      this.categ = value;
    });
  }

}
