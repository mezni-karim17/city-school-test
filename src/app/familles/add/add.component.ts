import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private apiService: ServicesService,
              private router: Router
    ) { }

  addForm: FormGroup;
  ngOnInit() {
   this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });

  }

  onSubmit(){
    console.log(this.addForm.value);

    this.apiService.createUser(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['view'])
    });

  }

}
