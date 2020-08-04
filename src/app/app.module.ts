import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GeneSelectorComponent, GeneSelectorService } from './components/gene-selector';
import { YearSelectorComponent } from './components/year-selector';
import { SortSelectorComponent } from './components/sort-selector';

@NgModule({
  declarations: [
    AppComponent,
    GeneSelectorComponent,
    YearSelectorComponent,
    SortSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GeneSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
