import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MessageCompose from "./MessageCompose";
import { Message } from "../domain/Message";

const renderComponent = (handleMessageSubmit = (message: Message) => {}) =>
  render(<MessageCompose onMessageSubmit={handleMessageSubmit} />);

test("<MessageCompose /> full flow", () => {
  const handleMessageSubmit = jest.fn();

  const { getByPlaceholderText, getByText } = renderComponent(
    handleMessageSubmit
  );

  const inputElement = getByPlaceholderText("Message");

  fireEvent.change(inputElement, { target: { value: "new message body" } });

  const submitButton = getByText(/send/i);

  fireEvent.submit(submitButton);

  expect(handleMessageSubmit).toHaveBeenCalledWith({
    message: "new message body",
    author: "Our App",
    date: expect.any(Number),
    id: expect.any(String)
  });
});
