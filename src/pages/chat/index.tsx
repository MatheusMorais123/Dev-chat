/* eslint-disable */
import Input from '@/components/Input/Input';
import SearchIcon from '@/assets/images/search.svg';
import MenuBarsIcon from '@/assets/images/menuBars.svg';
import * as S from './styles';

export default function Chat() {
  return (
    <S.Wrapper>
      <S.ChatContainer>
        <S.ChatSidebar>
          <S.MyChats>
            <S.MyChatHeader>
              <Input
                leftIcon={<SearchIcon color="#262931" />}
                placeholder="Buscar conversa"
              />

              <MenuBarsIcon
                width="1.063rem"
                height="0.813rem"
                color="#878787"
              />
            </S.MyChatHeader>
          </S.MyChats>
        </S.ChatSidebar>
      </S.ChatContainer>
    </S.Wrapper>
  );
}
