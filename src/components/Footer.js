import Button from './Button'
import styled from 'styled-components'

const Footer = (loadAnimals) => {
  const StyledFooter = styled.footer`
    padding: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    p:first-child {
      margin-bottom: 0;
    }
  `;

  return (
    <StyledFooter>
      <p>Created by <a href="https://github.com/a6macleod">Andrew MacLeod</a></p>
      <p>&copy; {new Date().getFullYear()}</p>

    </StyledFooter>
  );
}

export default Footer;