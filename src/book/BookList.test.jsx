import React from "react";
import { render, screen } from "@testing-library/react";

import BookList from "./BookList";
import { describe, expect, it } from "vitest";
import { BookDetail } from "./BookDetail";
describe("BookList", () => {
  it("loading", () => {
    const props = { loading: true };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Loading...");
  });
  it("error", () => {
    const props = { error: true };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");
    expect(content.innerHTML).toContain("Error Loading Page 😪");
  });
  it("remder books", () => {
    const props = {
      books: [
        {
          id: 1,
          name: "Refactoring",
        },
        {
          id: 2,
          name: "Domain Driven Design",
        },
      ],
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("div");
    const titles = [...content.querySelectorAll("h2")].map(
      (h2) => h2.innerHTML
    );
    expect(titles).toEqual(["Refactoring", "Domain Driven Design"]);
  });
  it("render title", () => {
    const props = {
      book: {
        name: "Refactoring",
        description:
          "Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure.",
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("div");
    const title = content.querySelector("h2");
    expect(title.innerHTML).toEqual("Refactoring");
    const description = content.querySelector("p");
    expect(description.innerHTML).toEqual(props.book.description);
  });
  it("displays the bookname  when no description is given", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };
    const { container } = render(<BookDetail {...props} />);
    const content = container.querySelector("div");
    const title = content.querySelector("h2");
    expect(title.innerHTML).toEqual("Refactoring");
    const description = content.querySelector("p");
    expect(description.innerHTML).toEqual("");
  });
});
