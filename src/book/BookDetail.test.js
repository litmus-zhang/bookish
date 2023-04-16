import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


describe("BookDetail", () => {
    it("shows the book name", () => {
        render(<BookDetail name="Refactoring" />);
        expect(screen.getByText("Refactoring")).toBeVisible();
    });
})