import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  subject="";
  subtheme="";
  fullname="";
  email="";
  message="";
  constructor() { }

  ngOnInit(): void {
  }

}
