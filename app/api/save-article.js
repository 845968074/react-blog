'use strict';
import _ from 'lodash';
import {Article} from '../db/schema';

export default function (req, res, next) {
  const article = req.body;
  if (_.isEmpty(article)) {
    res.sendStatus(400);
  } else {
    new Article(article).save((err) => {
      if (err) return next(err);
      res.sendStatus(201);
    });
  }
}
