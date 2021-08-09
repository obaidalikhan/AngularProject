import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // template: `<h1>Hello {{name}}</h1>`,
  // template: `
  //  <div>
  //     <h1>{{appTitle}}</h1>
  //     <div>To Tutorials Point</div>
  //  </div>`

  template: ` <div>
      <h1>{{appTitle}}</h1>
      <div>To Tutorials Point</div>
   </div> `,
})
export class AppComponent {
  name = 'USA';
  appTitle: string = 'Welcome';
}
