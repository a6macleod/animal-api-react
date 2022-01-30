import styled from 'styled-components'

const Header = ({ loadAnimals }) => {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: 40px;
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
      <h1>Learn about Animals!</h1>
      <button onClick={loadAnimals}>Load New Animals!</button>
    </StyledDiv>
  );
}

export default Header;