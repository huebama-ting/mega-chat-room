import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChatControlComponent } from 'src/app/components/chat-control/chat-control.component';
import { ChatDisplayComponent } from 'src/app/components/chat-display/chat-display.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { UsernameEntryComponent } from 'src/app/components/username-entry/username-entry.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatControlComponent,
    ChatDisplayComponent,
    ChatMessageComponent,
    ChatMessageDirective,
    ChatRoomComponent,
    ScrollDirective,
    UsernameEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SignalRService, {
      provide: APP_INITIALIZER,
      useFactory: (signalRService: SignalRService) => signalRService.startConnection(),
      deps: [SignalRService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
