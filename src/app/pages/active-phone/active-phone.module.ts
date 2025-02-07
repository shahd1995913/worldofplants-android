import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActivePhonePage } from './active-phone.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ActivePhonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [ActivePhonePage]
})
export class ActivePhonePageModule {}
