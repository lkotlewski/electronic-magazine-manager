import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {SearchComponent} from './components/search/search.component'
import {HistoryComponent} from './components/history/history.component'
import {PartDetailsComponent} from './components/part-details/part-details.component'
import {AuthGuard} from './guards/auth-guard'
import {LoginComponent} from './components/login/login.component'
import {LogoutComponent} from './components/logout/logout.component'
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component'
import {PartListComponent} from './components/part-list/part-list.component'
import {NothingFoundComponent} from './components/nothing-found/nothing-found.component'

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'part-details/by-number/:number', component: PartDetailsComponent},
  {path: 'part-details/by-desc/:desc', component: PartDetailsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'parts', component: PartListComponent},
  {path: 'nothing-found', component: NothingFoundComponent},
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'auth-callback', component: AuthCallbackComponent },
  {path: '', redirectTo: '/search', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
