import { render, screen } from "@testing-library/react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Carousel from "../src/components/Carousel";

// Carousel component uses IntersectionObserver API, so we need to mock it
const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Render Carousel", () => {
  it("should render the carousel with items", () => {
    const childrenMock = [1, 2, 3, 4, 5, 6];
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <Carousel itemWidth={400} length={childrenMock.length}>
            {childrenMock.map((item, i) => (
              <div key={i} data-testid={`item-${i}`}>
                {item}
              </div>
            ))}
          </Carousel>
        </ThemePicker>
      </StyleProvider>
    );
    const carousel = screen.getByRole("region");
    const firstItem = screen.getByTestId("item-0");
    expect(carousel).toBeInTheDocument();
    expect(firstItem).toBeInTheDocument();
  });
});
