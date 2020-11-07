import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {UpdatePersonComponent} from './update-person/update-person.component';

const routes: Routes = [
  {path: 'persons', component: PersonComponent},
  {path: 'create-person', component: CreatePersonComponent},
  {path: 'update-person/:id', component: UpdatePersonComponent},
  {path: '', redirectTo: 'persons', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
