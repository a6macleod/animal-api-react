import Styled from 'styled-components'

const Home = ({ animals, isLoading }) => {
  const StyledDiv = Styled.div`
    max-width: 1200px;
    margin: 0 4rem 0 4rem;
    /* card grid list */
    ul {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid black;
    }
    /* individual cards */
    .card {
      cursor: pointer;
      height: 20rem;
      overflow: hidden;
      position: relative;
    }
    .info {
      position: absolute;
      display: none;
      width: 20rem;
      color: #fff;
      ul {
        padding: 1rem;
      }
      li {
        display: inline;
      }
      span {
        text-decoration: underline;
      }
    }
    img {
      object-fit: cover;
      max-width: 35rem;
    }
    .loading {
    align-self: center;
  }
    /* on hover: add overlay and show animal info */
    .card:hover, .clicked {
      img {
        opacity: 0.2;
      }
      .mask {
        background: hsla(40, 5%, 5%, 1);
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          padding: 0;
          margin-bottom: 0;
        }
      }
    }
    /* screen size media queries for responsivness */
    @media (max-width: 817px) {
      img {
        max-width: 40rem;
      }
    }

    @media (max-width: 650px) {
      .card {
        height: 18rem;
      }
      img {
        max-width: 30rem;
      }
      .info {
        font-size: 0.9rem;
        max-width: 15rem;
      }
    }
    @media (max-width: 500px) {
      .card {
        height: 15rem
      }
      img {
        max-width: 25rem;
      }
      .info {
        font-size: 0.7rem;
      }
    }

    @media (max-width: 450px) {
      ul {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      }
      .card {
        height: 12rem
      }
      img {
        max-width: 15rem;
      }
      .info {
        font-size: 0.6rem;
      }
      }
    }
  `;

  function toggleInfo(id) {
    const target = document.getElementById(id);
    if (target.classList.contains('clicked')) {
      target.classList.remove('clicked')
    } else {
      target.classList.add('clicked')
    }
  }


  return isLoading ? (<h2 className='loading'>...Loading Animals</h2>) : (
    <StyledDiv>
      <ul>
      {animals.map((animal) => (
        <li key={animal.id} id={animal.id} className='card' onClick={() => toggleInfo(animal.id)}>
          <div className='info'>
          <ul>
              <li><h3>{animal.name}</h3></li>
              <li><span>Latin name:</span> {animal.latin_name}</li>
              <li><span>Type:</span> {animal.animal_type}</li>
              <li><span>Active:</span> {animal.active_time}</li>
              <li><span>Lifespan:</span> {animal.lifespan} years</li>
              <li><span>Habitat:</span> {animal.habitat}</li>
              <li><span>Diet:</span> {animal.diet}</li>
              <li><span>Located in:</span> {animal.geo_range}</li>
            </ul>
            </div>
          <div className='mask'>
            <img src={animal.image_link} alt={animal.name} />
          </div>


        </li>
      ))}
      </ul>
     </StyledDiv>
    )
};

export default Home;