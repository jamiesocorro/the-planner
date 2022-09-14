import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'the-planner';

  constructor(private titleService: Title) {
    this.titleService.setTitle('The Planner');
  }
}
