import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
/* import Loader from '../../components/Loader'; */
/* import Modal from '../../components/Modal'; */

export default function Home() {
  return (
    <Container>
      {/*  <Loader /> */}
      {/*   <Modal danger /> */}
      <InputSearchContainer>
        <input type="text" placeholder="search for contacts" />
      </InputSearchContainer>
      <Header>
        <strong>1 contact</strong>
        <Link to="/new">new contact</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Couto</strong>
              <small>instagram</small>
            </div>
            <span>mateuscouto@email.com</span>
            <span>(71) 21314213</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3000')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log(error);
  });
