import { Component } from '@angular/core';
import { RequiredInput } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular-selector-with-attribute';

  requiredInput: RequiredInput = { anyKey: 'anyValue' };
}
