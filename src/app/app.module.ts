import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FormRowComponent } from './form-row/form-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ButtonComponent,
    FormRowComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
