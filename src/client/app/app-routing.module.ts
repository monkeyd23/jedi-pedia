import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { JediDetailComponent } from "./jedi-detail/jedi-detail.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EditJediComponent } from "./edit-jedi/edit-jedi.component";

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
    path: 'detail/:name',
    component: JediDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: AddJediComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:name',
    component: EditJediComponent,
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
