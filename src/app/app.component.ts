import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapnote';

  public attributes = {id: 'hello'};

  public onClick() {
    this.attributes = {id: 'buy'};
  }
}
