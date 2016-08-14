'use strict';
import express from 'express';
import saveArticle from './save-article';
import getArticles from './get-articles';

const router = express.Router();

const articles = [];

router.post('/article', saveArticle);

router.get('/articles', getArticles);

export default router;