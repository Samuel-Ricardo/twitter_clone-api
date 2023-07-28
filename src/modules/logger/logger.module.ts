export const log = ({
  context,
  message,
}: {
  context: string;
  message: string;
}) => console.log(`[${context}] | ${message}`);
export const logger = {
  error: ({
    context,
    message,
    error,
  }: {
    context: string;
    message: string;
    error?: Error;
  }) => console.error(`[${context}] | ${message} `, error),
  info: ({ context, message }: { context: string; message: string }) =>
    console.info(`[${context}] | ${message}`),
  warn: ({ context, message }: { context: string; message: string }) =>
    console.warn(`[${context}] | ${message}`),
};
