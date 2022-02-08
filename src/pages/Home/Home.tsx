import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/card/Card';
import { Post } from '../../shared/models/posts.model';
import * as action from '../../shared/state/actions/actions';

import './Home.scss';

export default function Home() {
  let dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(action.loadPosts())
  }, [dispatch]);

  const handleDelete = (item: Post) => {
    dispatch(action.deletePost(item));
  };

  return (
    <div className='container'>
      {posts &&
        posts.map((element: Post, index: number) => {
          return <Card key={index} post={element} func={handleDelete} />;
        })}
    </div>
  );
}
