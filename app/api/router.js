'use strict';
import express from 'express';
import _ from 'lodash';

const router = express.Router();

const articles = [];

router.post('/article', (req, res) => {
  const article = req.body;
  if (_.isEmpty(article)) {
    res.sendStatus(400);
  } else {
    articles.push(article);
    res.sendStatus(201);
    console.log(JSON.stringify(articles));
  }
});

export default router;