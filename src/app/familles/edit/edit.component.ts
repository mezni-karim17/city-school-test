import { User } from 'src/app/Model/user';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: ServicesService,
    private router : Router,
    private routes : ActivatedRoute
) { }

addForm: FormGroup;

ngOnInit() {

const routeParams = this.routes.snapshot.params;
console.log(routeParams.id);
//$_GET[]

this.addForm = this.formBuilder.group({
id: [],
username: ['', Validators.required],
email: ['', Validators.required],
password: ['', Validators.required],
firstName: ['', Validators.required],
lastName: ['', Validators.required],
age: ['', Validators.required]
});


this.apiService.getUserById(routeParams.id).subscribe((data: any) => {
// console.log(data)
this.addForm.patchValue(data);
});

}

onUpdate(){
// console.log(this.addForm.value)
// console.log(this.addForm.value);
this.apiService.updateFamille(this.addForm.value).subscribe(() => {
this.router.navigate(['view']);
},
error => {
alert(error);
});
}

}

