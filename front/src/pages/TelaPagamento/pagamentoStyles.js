import styled from "styled-components"


export const Container = styled.body`
  width: 100%;
  height: 140vh;
  max-width: 100%;
  margin: 0 auto;

  .titulo {
    flex-direction: column;
    color: #04136e;
    font-size: 18px;
    width: 50%;
    margin-top: 3rem;
    gap: 8px;
    
    p{
      font-size: 14px;
      font-weight: 200;
    }
  }

  .header {
    display: flex;
    justify-content: center;
  }
`;
;