import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { CssHomeComponent } from './screens/css-home/css-home.component';
import { cssRoutingModule } from './cssRoutingModule';

@NgModule({
  declarations: [CssComponent, CssHomeComponent],
  imports: [CommonModule, cssRoutingModule],
})
export class CssModuleModule {}
