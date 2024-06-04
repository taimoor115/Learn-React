export const reducer = (currentState, action) => {
  if (action === "Increment") return currentState + 1;
  if (action === "Decrement") return currentState - 1;
  return currentState;
};
