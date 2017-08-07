import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jedis',
    pathMatch: 'full'
  },
  {
    path: 'jedis',
    component: JediListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: AddJediComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: '**',
    redirectTo: 'jedis'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
