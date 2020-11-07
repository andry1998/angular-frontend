import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePersonComponent } from './create-person/create-person.component';
import {FormsModule} from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CreatePersonComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
