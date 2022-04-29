import { ChatMessage } from './chat-message.model';

export interface ChatMessageUser extends ChatMessage {
  username: string
}
