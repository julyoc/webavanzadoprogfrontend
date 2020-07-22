import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  fgroup: FormGroup;
  message: string = '';

  constructor(@Inject(Router) private rutas: Router, @Inject(UsersService) private service: UsersService) { 
    this.fgroup = new FormGroup({
      name: new  FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onsubmit() {
    this.service.addOne(this.fgroup.value).subscribe(value => {
      console.log(value);
      this.rutas.navigate(['user']);
    });
  }

}
