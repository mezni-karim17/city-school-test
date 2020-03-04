import { from } from 'rxjs';
import { ApiResponse } from './../../Model/api-response';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users: any;

  constructor(
    private apiService: ServicesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });

  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  edit(user: User): void {
    this.router.navigate(['edit/' + user.id]);
  }

}
