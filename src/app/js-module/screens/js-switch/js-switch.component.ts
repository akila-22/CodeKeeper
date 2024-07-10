import { Component } from '@angular/core';

@Component({
  selector: 'app-js-switch',
  templateUrl: './js-switch.component.html',
  styleUrls: ['./js-switch.component.scss'],
})
export class JsSwitchComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
