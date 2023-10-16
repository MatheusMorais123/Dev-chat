import { ChatItemProps } from '.';

export const chatItemMock = {
  chatRequester: { id: 'any_id', name: 'Hector Escobar', avatarUrl: '' },
  lastMessage: {
    id: 'any_id',
    content: 'Olá tudo bem ?',
    date: '2023-02-16T14:45:16.604Z',
    senderId: 'any_sender_id',
    senderName: 'Any_Name',
  },
  newMessagesCount: 5,
} as ChatItemProps;
