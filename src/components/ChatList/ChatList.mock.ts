import { ChatListProps } from './ChatList.types';
import { chatItemMock } from '../ChatItem';

export const chatListMock = {
  chatItems: Array(20).fill(chatItemMock),
  maxHeight: '500px',
} as ChatListProps;
