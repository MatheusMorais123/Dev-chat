import { S, TagProps } from '.';

const Tag = ({ content, ...props }: TagProps) => {
  return (
    <S.Wrapper {...props}>
      <p>{content}</p>
    </S.Wrapper>
  );
};

export default Tag;
