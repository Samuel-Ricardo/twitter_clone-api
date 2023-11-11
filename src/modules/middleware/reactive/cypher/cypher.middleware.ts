import { MODULES } from '../../../app.factory';

export const encryptResponse = (data: any) => {
  const cypher = MODULES.SECURITY.CRYPTOGRAPHY.TURING();
  return { encrypted: cypher.encryptIV(JSON.stringify(data)) };
};
