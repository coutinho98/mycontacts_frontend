import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Title</h1>
        <p>body of modal</p>

        <Footer>

          <button type="button" className="cancel-button">cancel</button>
          <Button type="button">register</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
