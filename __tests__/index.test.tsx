import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a vercel logo", () => {
    render(<Home />);

    const vercel = screen.getByAltText("Vercel Logo");
    expect(vercel).toBeInTheDocument();
    expect(vercel).toHaveAttribute("height", "24");
  });

  it("renders a thirteen svg", () => {
    render(<Home />);

    const svg = screen.getByAltText("13");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("src", "/thirteen.svg");
  });

});
