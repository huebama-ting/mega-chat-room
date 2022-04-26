import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UsernameEntryComponent } from './username-entry/username-entry.component';

const routes: Routes = [
  { path: 'chat-room', component: ChatRoomComponent },
  { path: 'username-entry', component: UsernameEntryComponent },
  { path: '**', redirectTo: 'username-entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
