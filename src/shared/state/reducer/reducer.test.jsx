/* eslint-disable jest/valid-expect */
import reducer from "./reducer";
import actionTypes from "../actions/action-types.tsx";

describe("Given actiontypes reducer", () => {
  test("When action.types = GET_POST, then sjould return array", () => {
    const initialState = [];
    const action = {
      type: actionTypes.GET_POST,
      post: [{ userId: 1, body: "body" }],
    };
    expect(
      reducer(initialState, action).toEqual([{ userId: 1, body: "body" }])
    );
  });
});
