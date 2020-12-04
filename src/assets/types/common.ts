export type CommonObject = {
  [key: string]: never;
};

export type HashMap = {
  [key: string]: string;
};

export type GenericMap<T> = {
  [key: string]: T;
};
