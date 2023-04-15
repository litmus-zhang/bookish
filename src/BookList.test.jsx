import React from "react";
import { render, screen } from "@testing-library/react";

import BookList from "./BookList";
import { describe, expect, it } from "vitest";
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
});
