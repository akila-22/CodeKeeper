import { Component } from '@angular/core';

@Component({
  selector: 'app-js-functions',
  templateUrl: './js-functions.component.html',
  styleUrls: ['./js-functions.component.scss'],
})
export class JsFunctionsComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
