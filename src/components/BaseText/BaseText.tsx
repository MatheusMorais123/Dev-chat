import { S, BaseTextProps } from '.';

const BaseText = ({
  children,
  alternativeColor,
  fontSize = '1rem',
  fontWeight = 'normal',
  color = '#262931',
  uppercase = false,
  textAlign = 'start',
  breakWord = false,
  textDecoration = false,
  lineHeight,
  letterSpacing,
  ...props
}: BaseTextProps) => {
  return (
    <S.Wrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      alternativeColor={alternativeColor}
      uppercase={uppercase}
      textAlign={textAlign}
      breakWord={breakWord}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export default BaseText;
