import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  view: 'new' | 'edit' | 'nothing' = 'nothing';

  newFirst: string;
  newLast: string;
  newStreet: string;
  newNumber: number;
  newPostcode: number;
  newLocation: string;
  newSalary: number;

  editFirst: string;
  editLast: string;
  editStreet: string;
  editNumber: number;
  editPostcode: number;
  editLocation: string;
  editSalary: number;

  indexEditClient: number;
  editedClient: Client;

  clients: Client[] = [
    {
      first: 'Patricia',
      last: 'Karlson',
      street: 'Test Str.',
      number: 1,
      postcode: 45123,
      location: 'TestOrt',
      salary: 65000,
    },
    {
      first: 'Hans',
      last: 'Müller',
      street: 'Test Str.',
      number: 5,
      postcode: 45123,
      location: 'TestOrt',
      salary: 55000,
    },
  ];


  saveClient(): void {
    const newClient = {
      first: this.newFirst,
      last: this.newLast,
      street: this.newStreet,
      number: this.newNumber,
      postcode: this.newPostcode,
      location: this.newLocation,
      salary: this.newSalary,
    };
    this.clients.push(newClient);
    this.view = 'nothing';
  }

  editClient(ClientToEdit: Client): void {
    this.view = 'edit';
    this.indexEditClient = this.clients.indexOf(ClientToEdit);
    this.editedClient = ClientToEdit;

    this.editFirst = ClientToEdit.first;
    this.editLast = ClientToEdit.last;
    this.editStreet = ClientToEdit.street;
    this.editNumber = ClientToEdit.number;
    this.editPostcode = ClientToEdit.postcode;
    this.editLocation = ClientToEdit.location;
    this.editSalary = ClientToEdit.salary;
  }

  saveChanges(): void {
    this.editedClient.first = this.editFirst;
    this.editedClient.last = this.editLast;
    this.editedClient.street = this.editStreet;
    this.editedClient.number = this.editNumber;
    this.editedClient.postcode = this.editPostcode;
    this.editedClient.location = this.editLocation;
    this.editedClient.salary = this.editSalary;

    this.view = 'nothing';
  }

  resetChanges(): void {
    this.editClient(this.editedClient);
  }

  deleteClient(): void {
    this.clients.splice(this.indexEditClient, 1);
    this.view = 'nothing';
  }
}

export interface Client {
  first: string;
  last: string;
  street: string;
  number: number;
  postcode: number;
  location: string;
  salary: number;
}
