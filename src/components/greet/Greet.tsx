import { GreetProp } from "./greet.types";

export const Greet = ({ name = "" }: GreetProp) => {
  return <div>Hello {name}</div>;
};
