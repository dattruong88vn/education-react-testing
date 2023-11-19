import { rest } from "msw";
import { MOCK_DATA_USERS } from "./data";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_DATA_USERS));
  }),
];
