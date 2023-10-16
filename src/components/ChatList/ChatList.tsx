import { forwardRef, useImperativeHandle, useState } from 'react';
import { S, ChatListProps, ChatListRef } from '.';
import ChatItem from '../ChatItem/ChatItem';

const ChatList = forwardRef<ChatListRef, ChatListProps>(function (
  { maxHeight = '350px', chatItems },
  ref,
) {
  const [open, setOpen] = useState(true);

  useImperativeHandle(ref, () => ({
    toggleList() {
      setOpen(!open);
    },
  }));

  return (
    <S.Wrapper maxHeight={maxHeight} isOpen={open}>
      <S.List>
        {chatItems.map(chatItem => (
          <ChatItem
            chatRequester={chatItem.chatRequester}
            lastMessage={chatItem.lastMessage}
            newMessagesCount={chatItem.newMessagesCount}
          />
        ))}
      </S.List>
    </S.Wrapper>
  );
});

export default ChatList;
