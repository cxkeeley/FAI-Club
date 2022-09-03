import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  width: 62px;
  height: 250px;
  z-index: ${({ theme }) => theme.zIndex.awwwards};
`;
