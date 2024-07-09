import {
  Component,
  Input,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as Prism from 'prismjs';
// Import specific languages and plugins
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-js-code',
  templateUrl: './js-code.component.html',
  styleUrls: ['./js-code.component.scss'],
})
export class JsCodeComponent {
  @Input() showCode: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
