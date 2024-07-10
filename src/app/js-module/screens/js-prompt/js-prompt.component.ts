import { Component } from '@angular/core';

@Component({
  selector: 'app-js-prompt',
  templateUrl: './js-prompt.component.html',
  styleUrls: ['./js-prompt.component.scss'],
})
export class JsPromptComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
