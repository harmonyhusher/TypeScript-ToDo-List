import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';

test('renders the Todo List component', () => {
  const { getByText, getByPlaceholderText } = render(<ToDoList />);
  
  const titleElement = getByText('todos');
  const inputElement = getByPlaceholderText("What's need to be done?");
  const filterButtons = getByText('All');

  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(filterButtons).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ToDoList />);
  
  const inputElement = getByPlaceholderText("What's need to be done?");
  const addButton = getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });

  const newTodoElement = getByText('New Task');
  expect(newTodoElement).toBeInTheDocument();

  const emptyInput = queryByText('');
  expect(emptyInput).toBeNull();
});