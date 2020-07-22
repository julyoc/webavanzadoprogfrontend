import { Component, OnInit, Inject } from '@angular/core';
import { CategService } from './categ.service';

@Component({
  selector: 'app-categ',
  templateUrl: './categ.component.html',
  styleUrls: ['./categ.component.scss']
})
export class CategComponent implements OnInit {

  constructor(@Inject(CategService) private service: CategService) { }

  ngOnInit(): void {
    this.service.postCateg({name: "categ2", description: "categ3"}).subscribe(value => {
      console.log(value);
    });
    this.service.getAllCateg().subscribe(value => {
      console.log(value);
    });
  }

}
