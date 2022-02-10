import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Post } from "../../shared/models/posts.model";
import { Card } from "./Card";

describe("Given the component Card", () => {
  describe("When it recieves some props", () => {
    test("It renders information given", () => {
      const mockPost: Post = {
        id: 1,
        body: "This is a test body",
        title: "This is a test title",
        userId: 1,
      };
      const mockFunction = jest.fn();

      render(<Card post={mockPost} func={mockFunction} />);

      expect(
        screen.getByRole("heading", { name: "This is a test title" })
      ).toBeInTheDocument();
      expect(screen.getByText(/This is a test body/)).toBeInTheDocument();

      userEvent.click(screen.getByRole("button", { name: "DELETE" }));
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
