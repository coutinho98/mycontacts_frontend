import {
  Container,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Couto</strong>
              <small>Instagram</small>
            </div>
            <span>mateuscouto@email.com</span>
            <span>(71) 9921312312</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Baco Exu do Blues</strong>
              <small>Discord</small>
            </div>
            <span>rosesena@email.com</span>
            <span>(71) 123124213</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Gomes</strong>
              <small>Linkedin</small>
            </div>
            <span>tôquerendotebeijardnv@email.com</span>
            <span>(71) 21314213</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
