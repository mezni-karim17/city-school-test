import { AddComponent } from './familles/add/add.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './familles/view/view.component';
import { EditComponent } from './familles/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'add', component: AddComponent},
  { path: 'view', component: ViewComponent},
  { path: 'login', component: LoginComponent},
  {path: 'edit/:id', component: EditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
