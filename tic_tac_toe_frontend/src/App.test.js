import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function getSquares() {
  // 9 grid buttons
  return screen.getAllByRole("button", { name: /Square/i });
}

test("renders and plays a simple game (X wins) and can restart", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText(/X's turn/i)).toBeInTheDocument();

  const squares = getSquares();
  expect(squares).toHaveLength(9);

  // X: 1, O: 4, X: 2, O: 5, X: 3 => X wins top row
  await user.click(squares[0]);
  expect(screen.getByText(/O's turn/i)).toBeInTheDocument();

  await user.click(squares[3]);
  expect(screen.getByText(/X's turn/i)).toBeInTheDocument();

  await user.click(squares[1]);
  await user.click(squares[4]);
  await user.click(squares[2]);

  expect(screen.getByText(/X wins!/i)).toBeInTheDocument();
  expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /Restart/i }));
  expect(screen.getByText(/X's turn/i)).toBeInTheDocument();
});
