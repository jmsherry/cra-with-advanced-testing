import { render, screen } from "@testing-library/react";
import ProfileDisplay from "../ProfileDisplay";

const user = {
  firstName: "James",
  lastName: "Sherry",
  avatar_url: "/avatar.jpg"
};

describe("The ProfileDisplay Component", () => {
  test("It had a title", () => {
    render(<ProfileDisplay user={user} />);
    const heading = screen.getByText(/Profile/i);
    expect(heading).toBeInTheDocument();
  });
  test("It displays the person's name", () => {
    render(<ProfileDisplay user={user} />);
    const nameRegex = new RegExp(`${user.firstName} ${user.lastName}`, "i");
    const nameDisplay = screen.getByText(nameRegex);
    expect(nameDisplay).toBeInTheDocument();
  });

  test("It displays the person's avatar", () => {
    render(<ProfileDisplay user={user} />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', user.avatar_url);
    const fullName = `${user.firstName} ${user.lastName}`;
    expect(avatar).toHaveAttribute('alt', fullName);
    expect(avatar).toBeInTheDocument();
  });
});
