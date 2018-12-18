import { Input, Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test',
  template: `{{ message }}`
})
export class InputComponent {
  @Input() message: string;
}
