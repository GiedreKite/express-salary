import express from 'express';
import { accountGet } from './accountGet.js';
import { accountPost } from './accountPost.js';
import { accountPut } from './accountPut.js';
import { accountDelete } from './accountDelete.js';

export const routerApiAccount = express.Router();

routerApiAccount
    .route('/')
    .get(accountGet)
    .post(accountPost)
    .put(accountPut)
    .delete(accountDelete);