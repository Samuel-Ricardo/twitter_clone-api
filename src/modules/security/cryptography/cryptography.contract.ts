import { IHashAlgorithm } from './algorithm/hash/hash.algorithm';
import { ICryptographyIVAlgotihm } from './algorithm/cryptography.algorithm';

export interface ICryptographer
  extends ICryptographyIVAlgotihm,
    IHashAlgorithm {}
