type checkType<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : "other";

type A = checkType<"asd">;
type B = checkType<2>;
type C = checkType<true>;
