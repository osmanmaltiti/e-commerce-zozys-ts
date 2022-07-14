import { render, screen } from "@testing-library/react";
import LandingPage from "..";

describe("Landing Page", () => {
  it("renders a heading", () => {
    render(<LandingPage />);

    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
