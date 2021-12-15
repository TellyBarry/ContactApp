import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  public contacts: Contact[] = [];
  public contactAffiche: Contact = new Contact();

  title = 'contact';

  constructor(private contactService: ContactService){}

  ngOnInit(){
    this.contacts = this.contactService.contacts
    console.log(this.contacts)
  }

  addContact(event: any){
    this.contacts.push(event);
    this.contactService.contacts = this.contacts;
  }

  removeContact(contact:Contact){
    const index = this.contacts.indexOf(contact);
    if (index >= 0) this.contacts.splice(index, 1);
    this.contactService.contacts = this.contacts;
    this.contactAffiche = new Contact();
  }

  afficheContact(contact:Contact){
    this.contactAffiche = contact;
  }

  modifContact(event:any){
    let contact = event[0]
    let newPseudo = event[1]
    let contactAModifier = this.contacts.find(c=>c === contact)

    if (contactAModifier)
    {
      contactAModifier.pseudo = newPseudo;
    }
    this.contactService.contacts = this.contacts;
    console.log(contactAModifier)
  }
  
}
