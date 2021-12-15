import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  @Output() onEventSubmit = new EventEmitter;

  submitted = false;

  contactForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    pseudo: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email]),
  });
  
  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    if(this.contactForm.valid){
      this.onEventSubmit.emit(this.contactForm.value)
      this.contactForm.reset()
    }
  }
}

