import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-profil-contact',
  templateUrl: './profil-contact.component.html',
  styleUrls: ['./profil-contact.component.scss']
})
export class ProfilContactComponent implements OnInit {
  @Output() onEventModif = new EventEmitter;
  @Input() contact:Contact = new Contact;

  constructor() { }

  ngOnInit(): void {
  }

  onModif(event:any, contact:Contact){
    this.onEventModif.emit([contact, event.target.value])
  }

}
