import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, OnChanges {
  langs: string[] = ['english', 'malayalam', 'hindi'];
  email: string;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log(this.email);
    console.log('OnChanges');
  }
}
