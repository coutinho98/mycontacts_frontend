import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>title</h1>
        <p>body of modal</p>

        <Footer>
          <button type="button" className="cancel-button">cancel</button>
          <Button type="button" danger={danger}>delete</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
