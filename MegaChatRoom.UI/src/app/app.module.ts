import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChatControlComponent } from 'src/app/components/chat-control/chat-control.component';
import { ChatDisplayComponent } from 'src/app/components/chat-display/chat-display.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageDirective } from 'src/app/directives/chat-message/chat-message.directive';
import { ChatRoomComponent } from 'src/app/components/chat-room/chat-room.component';
import { ScrollDirective } from 'src/app/directives/scroll/scroll.directive';
import { SignalRService } from 'src/app/services/signal-r/signal-r.service';
import { UsernameEntryComponent } from 'src/app/components/username-entry/username-entry.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
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
