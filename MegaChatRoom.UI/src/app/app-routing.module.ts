import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsernameEntryComponent } from './username-entry/username-entry.component';

const routes: Routes = [
  { path: 'username-entry', component: UsernameEntryComponent },
  { path: '**', redirectTo: 'username-entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
