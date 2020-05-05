import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
      Name: ['',Validators.required],
      Email: ['',[Validators.required,Validators.email]],
      Subject: ['', Validators.required],
      Message: ['', Validators.required]
  });

  ngOnInit() {
  }

}
