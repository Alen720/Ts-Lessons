type GetElement<T> = T extends (infer U)[] ? U : never;

type A = GetElement<string[]>

// ---------------------------------------------------------------


type MyReturnType<T> = T extends (...args: any[]) => infer U ? U : never

type T1 = MyReturnType<() => string>

type T2 = MyReturnType<(a: number, b: boolean) => number[]>; 

type T3 = MyReturnType<string>;