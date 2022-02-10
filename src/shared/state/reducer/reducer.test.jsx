/* eslint-disable jest/valid-title */
import reducers from "./reducer";
describe("", () => {
  test("reducers", () => {
    let state;
    state = reducers(
      { data: { posts: [], post: {}, loading: true } },
      {
        type: "GET_POSTS",
        payload: [{ userId: 1, id: 1, title: "test", body: "test" }],
      }
    );

    expect(state).toEqual({
      data: {
        posts: [{ userId: 1, id: 1, title: "test", body: "test" }],
        post: {},
        loading: false,
      },
    });
  });
  test("reducerstest", () => {
    let state;
    state = reducers(
      {
        data: {
          posts: [{ userId: 1, id: 1, title: "test", body: "test" }],
          post: {},
          loading: false,
        },
      },
      {
        type: "DELETE_POST",
        payload: { userId: 1, id: 2, title: "test", body: "test" },
      }
    );
    expect(state).toEqual({
      data: {
        posts: [{ userId: 1, id: 1, title: "test", body: "test" }],
        post: {},
        loading: false,
      },
    });
  });
});
