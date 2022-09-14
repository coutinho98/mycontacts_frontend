import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="name" />
      </FormGroup>

      <FormGroup
        error="invalid email"
      >
        <Input placeholder="email" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="phone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
