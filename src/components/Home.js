import Styled from 'styled-components'

const Home = ({ animals, isLoading }) => {
  const StyledDiv = Styled.div`
    margin: 0 4rem 0 4rem;
    ul {
      /* height: 200px; */
      /* width: 200px; */
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid black;
      padding: 10px;
    }
    img {
      max-width: 20rem;
    }
    .loading {
    align-self: center;
  }
  `;

  return isLoading ? (<h2 className='loading'>...Loading Animals</h2>) : (
    <StyledDiv>
      <ul>
      {animals.map((animal) => (
        <li key={animal.id}>
          <h4>{animal.name}</h4>
          <div>
            <img src={animal.image_link} alt={animal.name} />
          </div>
        </li>
      ))}
      </ul>
     </StyledDiv>
    )
};

export default Home;