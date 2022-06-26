export type EmptyFunc = () => void;

export type WithId<T> = T & { id: string };

export type TypeOrNull<T> = T | null;

export type AnyFunc = (...params: any[]) => any;
