import { randomBytes } from 'crypto';
import { ObjectId } from 'mongodb';

export const randomID = () => new ObjectId(randomBytes(12)).toString();
