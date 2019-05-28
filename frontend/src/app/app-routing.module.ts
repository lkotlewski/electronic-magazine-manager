import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {HistoryComponent} from './components/history/history.component';
import {UpdateMagazineComponent} from './components/update-magazine/update-magazine.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'update-magazine', component: UpdateMagazineComponent},
  {path: 'history', component: HistoryComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
