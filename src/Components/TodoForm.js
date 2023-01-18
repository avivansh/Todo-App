import React, { useContext, useState } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
          />
          <Button color="warning"> ADD</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
