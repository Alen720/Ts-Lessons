type CheckType<T> = T extends string
  ? "String"
  : T extends number
    ? "Number"
    : T extends boolean
      ? "Boolean"
      : T extends null
        ? "Null"
        : "Other";

type A = CheckType<"Alen">
type B = CheckType<14>
type C = CheckType<true>
type D = CheckType<null>
type E = CheckType<string[]>
