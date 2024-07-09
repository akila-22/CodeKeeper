import { Component } from '@angular/core';

@Component({
  selector: 'app-js-variables',
  templateUrl: './js-variables.component.html',
  styleUrls: ['./js-variables.component.scss'],
})
export class JsVariablesComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
