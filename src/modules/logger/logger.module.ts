export const log = (
  {
    context,
    message,
  }: {
    context: string;
    message?: string;
  },
  ...data: any[]
) => console.log(`[${context}] | ${message}`, ...data);
export const logger = {
  error: (
    {
      context,
      message,
      error,
    }: {
      context: string;
      message: string;
      error?: Error;
    },
    ...data: any[]
  ) => console.error(`[${context}] | ${message} `, error, ...data),
  info: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) => console.info(`[${context}] | ${message}`, ...data),
  warn: (
    { context, message }: { context: string; message: string },
    ...data: any[]
  ) => console.warn(`[${context}] | ${message}`, ...data),
};
