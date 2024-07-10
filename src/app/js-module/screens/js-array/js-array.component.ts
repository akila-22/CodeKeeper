import { Component } from '@angular/core';

@Component({
  selector: 'app-js-array',
  templateUrl: './js-array.component.html',
  styleUrls: ['./js-array.component.scss'],
})
export class JsArrayComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
