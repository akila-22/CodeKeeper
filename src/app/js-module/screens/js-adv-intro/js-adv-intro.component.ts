import { Component } from '@angular/core';

@Component({
  selector: 'app-js-adv-intro',
  templateUrl: './js-adv-intro.component.html',
  styleUrls: ['./js-adv-intro.component.scss'],
})
export class JsAdvIntroComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
