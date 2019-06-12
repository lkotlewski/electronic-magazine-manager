import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {SearchComponent} from './components/search/search.component'
import {PartDetailsComponent} from './components/part-details/part-details.component'
import {HistoryComponent} from './components/history/history.component'
import {MaterialModule} from './material.module'
import {HttpClientModule} from '@angular/common/http';
import { ElementAmountDialogComponent } from './components/element-amount-dialog/element-amount-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PartDetailsComponent,
    HistoryComponent,
    ElementAmountDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ElementAmountDialogComponent]
})
export class AppModule {
}
