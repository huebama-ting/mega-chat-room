import { Injectable } from '@angular/core';

import { SignalRService } from '../signal-r/signal-r.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private signalRService: SignalRService) { }

  sendMessage(message: string) {
    this.signalRService.sendMessage(message);
  }
}
