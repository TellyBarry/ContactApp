import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() contacts:Contact[] = [];
  @Output() onEventDelete = new EventEmitter();
  @Output() onEventAffiche = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(contact:Contact){
    this.onEventDelete.emit(contact)
  }

  onAffiche(contact:Contact){
    this.onEventAffiche.emit(contact)
  }
}
