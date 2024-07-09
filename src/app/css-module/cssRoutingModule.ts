import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { CssHomeComponent } from './screens/css-home/css-home.component';

const routes: Routes = [
  {
    path: 'cssComponent',
    component: CssComponent,
    children: [{ path: 'cssHomeComponent', component: CssHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cssRoutingModule {}
