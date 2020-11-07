import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.getPerson();
  }

  // tslint:disable-next-line:typedef
    private getPerson(){
      this.personService.getPersonList().subscribe((data: Person[]) => {
        console.log(data);
        this.persons = data;
      });
    }

  // tslint:disable-next-line:typedef
    updatePerson(id: number){
      // @ts-ignore
      this.router.navigate(['update-person', id]);
    }

  // tslint:disable-next-line:typedef
    deletePerson(id: number){
      this.personService.deletePerson(id).subscribe( data => {
        console.log(data);
        this.getPerson();
      });
    }
}


