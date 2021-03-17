import React from "react";
import GuardedRoute from "../GuardedRoute";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(() => ({
    isLoading: false,
    isAuthenticated: true,
    getAccessTokenSilently: jest.fn(() => Promise.resolve("access-token")),
  })),
  withAuthenticationRequired: jest.fn(),
}));

jest.mock("../../config", () => ({
  getConfig: jest.fn(() => ({
    domain: "test-domain.com",
    clientId: "123",
    apiOrigin: "http://localhost:3001",
    audience: "test-audience",
  })),
}));


describe("The ExternalApi component", () => {

  it("renders", () => {
    render(<GuardedRoute />);
  });

  // it("makes a call to the API when the button is clicked", async () => {
    

  //   render(<ExternalApiComponent />);
  //   fireEvent.click(screen.getByText("Ping API"));

  //   await waitFor(() => screen.getByTestId("api-result"));

  //   expect(
  //     await screen.findByText(/This is the API result/)
  //   ).toBeInTheDocument();
  // });
});