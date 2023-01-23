import getNeighborhoodsList from "../2-arrow";

test("get neigborhood list", () => {
  expect(getNeighborhoodsList("Soma start")).toBe([
    "SOMA",
    "Union Square",
    "Soma start",
  ]);
});
