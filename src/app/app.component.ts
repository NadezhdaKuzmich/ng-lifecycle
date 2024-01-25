import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lifecycle-ng';
  show = false;
  parentValue = 'Some text...';

  onInputChange(event: Event) {
    this.parentValue = (event.target as HTMLInputElement).value;
  }
}
