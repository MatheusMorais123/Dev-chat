import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    width: 100%;
    max-width: 21rem;
    border-bottom: 1px solid #878787;
    padding: 0.625rem 0.375rem;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 100%;
  `}
`;

export const ContentHeader = styled.div`
  ${() => css`
    width: 6.875rem;

    > p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
    }
  `}
`;

export const ContentBody = styled.div`
  ${() => css`
    width: 8.625rem;

    > p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
    }
  `}
`;

export const Actions = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.25rem;
  `}
`;

export const Top = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  `}
`;

export const Bottom = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1ea659;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
    }
  `}
`;
