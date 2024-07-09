import { Component } from '@angular/core';

@Component({
  selector: 'app-js-comments',
  templateUrl: './js-comments.component.html',
  styleUrls: ['./js-comments.component.scss'],
})
export class JsCommentsComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
