import { S, HeadingProps } from '.';

const Heading = ({
  children,
  headingLevel = 'h1',
  fontSize = '2.3rem',
  fontWeight = 'bold',
  color = '#262931',
  uppercase = false,
  lineHeight,
  letterSpacing,
  ...props
}: HeadingProps) => {
  return (
    <S.Wrapper
      as={headingLevel}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      uppercase={uppercase}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};

export default Heading;
