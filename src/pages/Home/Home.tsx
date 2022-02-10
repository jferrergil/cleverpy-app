import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { Post } from "../../shared/models/posts.model";
import * as action from "../../shared/state/actions/actions";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.data);

  const [initialId, setInitialId] = useState(0);

  useEffect(() => {
    dispatch(action.loadPosts());
  }, [dispatch]);

  const handleDelete = (item: Post) => dispatch(action.deletePost(item));

  const handelClickNext = () =>
    initialId <= posts.length - 8 && setInitialId(initialId + 8);

  const handelClickPrev = () => initialId !== 0 && setInitialId(initialId - 8);

  return (
    <div className="principal">
      <div className="buttons">
        <button className="buttons-direction" onClick={handelClickPrev}>
          Prev
        </button>
        <button className="buttons-direction" onClick={handelClickNext}>
          Next
        </button>
      </div>
      <div className="container">
        {posts &&
          posts.map(
            (element: Post, index: number) =>
              index >= initialId &&
              index < initialId + 8 && (
                <Card key={index} post={element} func={handleDelete} />
              )
          )}
      </div>
    </div>
  );
}
