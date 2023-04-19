import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Your Receipt';
  localization = $localize`are you sure you want to ${this.title}`

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

}