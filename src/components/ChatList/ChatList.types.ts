import { ChatItemProps } from '../ChatItem';

export type ChatListProps = {
  chatItems: ChatItemProps[];
  maxHeight?: string;
};

export type ChatListRef = {
  toggleList: () => void;
};
