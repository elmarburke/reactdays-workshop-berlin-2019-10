import React from "react";
import { render } from "@testing-library/react";
import MessageView from "./MessageView";

test("<MessageView /> contains message body", () => {
  // Arrange
  const { getByText } = render(
    <MessageView
      message={{
        id: "1",
        message: "Message Body",
        author: "Hans Wurst",
        date: 42
      }}
    />
  );

  // Act
  const messageBody = getByText("Message Body");
  // Assert
  expect(messageBody).toBeDefined();
});

test("<MessageView /> smoke detector", () => {
  const { container } = render(
    <MessageView
      message={{
        id: "1",
        author: "me",
        date: 1,
        message: "Snapshots sind cool"
      }}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <article>
        Snapshots sind cool
        <footer>
          By: 
          me
        </footer>
      </article>
    </div>
  `);
});
