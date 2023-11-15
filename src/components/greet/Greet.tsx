type GreetProp = {
  name?: string;
};

export const Greet = ({ name = "" }: GreetProp) => {
  return <div>Hello {name}</div>;
};
