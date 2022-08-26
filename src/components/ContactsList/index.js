import {
    Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg'

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
                            <strong>José Cardoso Gabriel Vitor da Silva Uezono</strong>
                            <small>Instagram</small>
                        </div>
                        <span>josecardosogabrielvitordasilvauezono@scania.com</span>
                        <span>(11) 9923213232</span>
                    </div>

                    <div className='actions'>
                        <a href='/'>
                            <img src={edit} alt="Edit" />
                        </a>
                        <button type='button'>
                            <img src={trash} alt="Trash" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
