import { MODULES } from '@modules';
import { Router } from 'express';

const prefix = '/notifications';
const router = Router();
const notification = MODULES.NOTIFICATION.DEFAULT();
