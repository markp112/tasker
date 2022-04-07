type ResponseMessage = | 'created' | 'updated' | 'failed' | 'id exists';
type Response = {
  status: number;
  data?: Record<string, unknown>;
};

export type { Response };
