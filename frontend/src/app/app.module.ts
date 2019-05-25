import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchComponent} from './components/search/search.component';
import {UpdateMagazineComponent} from './components/update-magazine/update-magazine.component';
import {HistoryComponent} from './components/history/history.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UpdateMagazineComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
