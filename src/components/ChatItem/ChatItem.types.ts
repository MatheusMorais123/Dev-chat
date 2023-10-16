type LastMessage = {
  id: string;
  content: string;
  date: string;
  senderName: string;
  senderId: string;
};

type ChatRequester = {
  id: string;
  name: string;
  avatarUrl?: string;
};

export type ChatItemProps = {
  lastMessage: LastMessage;
  newMessagesCount?: number;
  chatRequester: ChatRequester;
};
