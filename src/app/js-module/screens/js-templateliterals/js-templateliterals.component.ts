import { Component } from '@angular/core';

@Component({
  selector: 'app-js-templateliterals',
  templateUrl: './js-templateliterals.component.html',
  styleUrls: ['./js-templateliterals.component.scss'],
})
export class JsTemplateliteralsComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
