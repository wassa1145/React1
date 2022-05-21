import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectArticlesLoading,
  selectError,
} from 'src/store/articles/selectors';

import { getArticles } from 'src/store/articles/slice';
import './Articles.css';

export const Articles: FC = () => {
  const dispatch = useDispatch<any>();
  const articles = useSelector(selectArticles);
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getArticles);
  }, []);

  return (
    <>
      <h2>Articles</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="article">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={() => dispatch(getArticles())}>reload</button>
    </>
  );
};
