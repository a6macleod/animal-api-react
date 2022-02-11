import styled from 'styled-components'

const Button = ({ loadAnimals }) => {
  const StyledButton = styled.button`
    background-color: hsla(127, 81%, 31%, 1);
    color: hsla(0, 0%, 100%, 1);
    border-radius: 5%;
    border: none;
    padding: 1em;

    &:hover {
      cursor: pointer;
      background-color: hsla(276, 67%, 56%, 1);
      transform: scale(1.1);
    }
    /* button sizes */
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  `;

  return (
    <StyledButton onClick={loadAnimals}>New Animals!</StyledButton>
  )
}

export default Button;