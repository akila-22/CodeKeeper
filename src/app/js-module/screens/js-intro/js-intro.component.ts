import { Component } from '@angular/core';

@Component({
  selector: 'app-js-intro',
  templateUrl: './js-intro.component.html',
  styleUrls: ['./js-intro.component.scss'],
})
export class JsIntroComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
