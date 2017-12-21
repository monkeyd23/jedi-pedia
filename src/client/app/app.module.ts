import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediComponent } from './jedi/jedi.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { ApiService } from './shared/api.service';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { JediDetailComponent } from './jedi-detail/jedi-detail.component';
import { EditJediComponent } from './edit-jedi/edit-jedi.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JediListComponent,
    JediComponent,
    AddJediComponent,
    LoginComponent,
    JediDetailComponent,
    EditJediComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
