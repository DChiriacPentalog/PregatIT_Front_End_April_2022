import styled from "@emotion/styled";

export const Timer = styled.div`
  display: grid;
  justify-items: center;
  background-color: #2a363b;
  color: white;
  border-radius: 10px;
  padding: 20px 0;
  .comment {
    margin-bottom: 20px;
    opacity: 0.6;
  }
`;
export const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  margin-bottom: 20px;
`;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
`;
