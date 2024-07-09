import { Component } from '@angular/core';

@Component({
  selector: 'app-js-conversion',
  templateUrl: './js-conversion.component.html',
  styleUrls: ['./js-conversion.component.scss'],
})
export class JsConversionComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
