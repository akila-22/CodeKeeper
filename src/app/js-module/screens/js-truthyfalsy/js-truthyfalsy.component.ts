import { Component } from '@angular/core';

@Component({
  selector: 'app-js-truthyfalsy',
  templateUrl: './js-truthyfalsy.component.html',
  styleUrls: ['./js-truthyfalsy.component.scss'],
})
export class JsTruthyfalsyComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
