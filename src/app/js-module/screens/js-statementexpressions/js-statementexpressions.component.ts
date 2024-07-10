import { Component } from '@angular/core';

@Component({
  selector: 'app-js-statementexpressions',
  templateUrl: './js-statementexpressions.component.html',
  styleUrls: ['./js-statementexpressions.component.scss'],
})
export class JsStatementexpressionsComponent {
  langEng: boolean = false;

  translate(event: any) {
    this.langEng = event.checked;
    console.log(event.checked);
  }
}
