/* eslint-disable no-shadow */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import formatPhone from "../../utils/formatPhone";
import isEmailValid from "../../utils/isEmailValid";

import useErrors from "../../hooks/useErrors";
import CategoriesService from "../../services/CategoriesService";

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    async function loadCategories() {
      const categoriesList = await CategoriesService.listCategories();

      setCategories(categoriesList);
    }
    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "name is required." });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "email is required." });
    } else {
      removeError("email");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({ name, email, phone, categoryId });
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="name *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      {/*  {' '}
      <FormGroup>
        <Input
          placeholder="date"
          type="date"
        />
      </FormGroup>
      {' '} */}

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          error={getErrorMessageByFieldName("email")}
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="phone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
