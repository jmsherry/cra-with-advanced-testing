import { render, screen } from "@testing-library/react";
import ProfileDisplay from "../ProfileDisplay";

const user = {
  email: "james.sherry@thejump.tech",
  email_verified: true,
  family_name: "Sherry",
  given_name: "James",
  locale: "en-GB",
  name: "James Sherry",
  nickname: "james.sherry",
  picture:
    "https://lh3.googleusercontent.com/a-/AOh14Gijc8C5_rnTo4hEFUizTeswvzwquedlNKvDhiDO=s96-c",
  sub: "google-oauth2|113477821073759809880",
  updated_at: "2021-03-17T01:32:47.717Z",
};

describe("The ProfileDisplay Component", () => {
  test("It had a title", () => {
    render(<ProfileDisplay user={user} />);
    const heading = screen.getByText(/Profile/i);
    expect(heading).toBeInTheDocument();
  });
  test("It displays the person's name", () => {
    render(<ProfileDisplay user={user} />);
    const nameRegex = new RegExp(user.name, "i");
    const nameDisplay = screen.getByText(nameRegex);
    expect(nameDisplay).toBeInTheDocument();
  });

  test("It displays the person's avatar", () => {
    render(<ProfileDisplay user={user} />);
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute("src", user.avatar_url);
    expect(avatar).toHaveAttribute("alt", user.name);
    expect(avatar).toBeInTheDocument();
  });
});
