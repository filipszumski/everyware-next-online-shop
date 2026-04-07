type SuccessResponseData = {
  status: "success";
  data: {
    name: string;
  };
};

type ErrorResponseData = {
  status: "error";
  error: {
    message: string | string[];
    code: number;
  };
};

export type ResponseData = SuccessResponseData | ErrorResponseData;
