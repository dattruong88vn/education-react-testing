import { http, HttpResponse } from "msw";
import { MOCK_DATA_USERS } from "./data";

export const handlers = [
  http.get(
    "https://jsonplaceholder.typicode.com/users",
    ({ request, params, cookies }) => {
      return HttpResponse.json(
        {
          data: MOCK_DATA_USERS,
        },
        {
          status: 200,
          statusText: "Success",
        }
      );
    }
  ),
];
