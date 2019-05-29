import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {SearchComponent} from './components/search/search.component'
import {HistoryComponent} from './components/history/history.component'
import {PartDetailsComponent} from './components/part-details/part-details.component'

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'part-details/by-number/:number', component: PartDetailsComponent},
  {path: 'part-details/by-desc/:desc', component: PartDetailsComponent},
  {path: 'history', component: HistoryComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
