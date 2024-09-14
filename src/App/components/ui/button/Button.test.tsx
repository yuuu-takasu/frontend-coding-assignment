import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";

// Button Component Test
describe("Button Component", () => {
  // ラベルのテスト
  it("renders the button with the correct label", () => {
    render(<Button label="Click Me" variant="black" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  // パターンのテスト
  it("renders with correct styles based on variant prop", () => {
    render(<Button label="Outlined" variant="outlined" />);
    expect(screen.getByRole("button")).toHaveClass("button outlined");
  });

  // クリックイベントのテスト
  it("calls the onClick function when clicked", async () => {
    const mockOnClick = jest.fn();
    render(<Button label="OnClick" onClick={mockOnClick} variant="black" />);
    fireEvent.click(screen.getByText("OnClick"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  // 非活性時のテスト
  it("does not call onClick when disabled", () => {
    const mockOnClick = jest.fn();
    render(
      <Button
        label="Disabled"
        onClick={mockOnClick}
        disabled={true}
        variant="black"
      />
    );
    fireEvent.click(screen.getByText("Disabled"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  // ロード中のテスト
  it("shows loading spinner and changes label when loading", () => {
    render(<Button label="Loading" variant="black" loading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // リンクのテスト
  it("renders as a link when href is provided", () => {
    render(
      <Button
        label="Go to Google"
        href="https://google.com"
        variant="black"
        target="_blank"
      />
    );
    expect(screen.getByText("Go to Google")).toBeInTheDocument();
    expect(screen.getByText("Go to Google")).toHaveAttribute(
      "href",
      "https://google.com"
    );
  });

  // サイズ変更のテスト
  it("applies correct width and height from props", () => {
    render(<Button label="Resize" variant="black" width={200} height={100} />);
    expect(screen.getByRole("button")).toHaveStyle({
      width: "200px",
      height: "100px",
    });
  });

  // アイコンのテスト
  it("renders left and right icons if provided", () => {
    render(
      <Button
        label="Icons"
        variant="black"
        iconLeft={<span>Left Icon</span>}
        iconRight={<span>Right Icon</span>}
      />
    );
    expect(screen.getByText("Left Icon")).toBeInTheDocument();
    expect(screen.getByText("Right Icon")).toBeInTheDocument();
  });
});
