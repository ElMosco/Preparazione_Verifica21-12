import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorMatcher } from '@angular/compiler';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'search',  component: SearchComponent},
  { path: 'item:/id', component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
