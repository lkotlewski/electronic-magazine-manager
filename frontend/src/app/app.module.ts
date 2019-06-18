import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {SearchComponent} from './components/search/search.component'
import {PartDetailsComponent} from './components/part-details/part-details.component'
import {HistoryComponent} from './components/history/history.component'
import {MaterialModule} from './material.module'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {ElementAmountDialogComponent} from './components/element-amount-dialog/element-amount-dialog.component'
import {PartListComponent} from './components/part-list/part-list.component'
import {NothingFoundComponent} from './components/nothing-found/nothing-found.component'
import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import {AdalInterceptor, AdalService} from 'adal-angular4'
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PartDetailsComponent,
    HistoryComponent,
    ElementAmountDialogComponent,
    LoginComponent,
    LogoutComponent,
    AuthCallbackComponent,
    ElementAmountDialogComponent,
    PartListComponent,
    NothingFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AdalService, { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ElementAmountDialogComponent]
})
export class AppModule {
}
