export type OnEnterCallbackParams = {
  name?: string;
  value?: string;
};

export type OnEnterCallback = (params: OnEnterCallbackParams) => void;
