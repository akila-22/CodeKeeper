import { Component } from '@angular/core';

@Component({
  selector: 'app-js-boolean',
  templateUrl: './js-boolean.component.html',
  styleUrls: ['./js-boolean.component.scss'],
})
export class JsBooleanComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
