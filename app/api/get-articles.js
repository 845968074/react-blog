'use strict';
import {Article} from '../db/schema';

export default function (req, res, next) {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.json(articles);
  });
}