import SoundIcon from '@/assets/images/sound.svg';
import ArrowDown from '@/assets/images/arrow-down.svg';
import Pin from '@/assets/images/pin.svg';
import { getFullDate } from '@/helpers/date.helpers';
import { S, ChatItemProps } from '.';
import BaseText from '../BaseText/BaseText';
import ChatAvatar from '../ChatAvatar';

const ChatItem = ({
  chatRequester,
  lastMessage,
  newMessagesCount,
}: ChatItemProps) => {
  return (
    <S.Wrapper>
      <ChatAvatar
        text={chatRequester.name}
        imageUrl={chatRequester.avatarUrl}
      />

      <S.Content>
        <S.ContentHeader>
          <BaseText fontWeight="semiBold" title={chatRequester.name}>
            {chatRequester.name}
          </BaseText>
        </S.ContentHeader>

        <S.ContentBody>
          <BaseText
            fontSize="0.75rem"
            fontWeight="normal"
            color="#727785"
            title={`${lastMessage.senderName}: ${lastMessage.content}`}
          >
            {lastMessage.senderName}: {lastMessage.content}
          </BaseText>
        </S.ContentBody>
      </S.Content>

      <S.Actions>
        <S.Top>
          <Pin color="#727785" width="0.938rem" height="0.938rem" />

          <BaseText fontSize="0.75rem" color="#727785">
            {getFullDate(lastMessage.date)}
          </BaseText>
        </S.Top>

        <S.Bottom>
          <SoundIcon color="#727785" width="0.75rem" height="0.75rem" />

          {newMessagesCount && (
            <div>
              <BaseText color="#ffff" fontSize="0.5rem" fontWeight="semiBold">
                {newMessagesCount}
              </BaseText>
            </div>
          )}

          <ArrowDown color="#727785" width="0.75rem" height="0.75rem" />
        </S.Bottom>
      </S.Actions>
    </S.Wrapper>
  );
};

export default ChatItem;
