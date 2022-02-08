import Button from './Button'
import styled from 'styled-components'

const Header = ({ loadAnimals }) => {
  const StyledDiv = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 40px;
    ul {
      display: flex;
    }
    li {
      margin: 1rem;
      padding: 1rem;
      list-style: none;
     }
     a {
        text-decoration: none;
      }
    a:hover {
      text-decoration: underline;
    }
  `;

  return(
    <StyledDiv>
      <h1>Animals Facts!</h1>
      <Button loadAnimals={loadAnimals} />
    </StyledDiv>
  );
}

export default Header;