import { MODULES } from '../../../app.factory';

export const decryptArgs = (args: any[]) => {
  return args.map((item) => decryptArg(item));
};

export const decryptArg = (arg: { encrypted?: string }) => {
  return arg.encrypted
    ? JSON.parse(
        MODULES.SECURITY.CRYPTOGRAPHY.TURING().decryptIV(arg.encrypted),
      )
    : arg;
};

export const encryptResponse = (data: any) => {
  const cypher = MODULES.SECURITY.CRYPTOGRAPHY.TURING();
  return { encrypted: cypher.encryptIV(JSON.stringify(data)) };
};
