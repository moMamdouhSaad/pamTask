import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public post = {
    title: 'If you wanted to get rich, how would you do it?',
  };

  public constructor() {}

  public ngOnInit(): void {}
}
