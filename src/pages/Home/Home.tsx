import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { Post } from "../../shared/models/posts.model";
import * as action from "../../shared/state/actions/actions";

import "./Home.scss";

export default function Home() {
  let dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.data);

  const [initialId, setInitialId] = useState(0);

  useEffect(() => {
    dispatch(action.loadPosts());
  }, [dispatch]);

  const handleDelete = (item: Post) => {
    dispatch(action.deletePost(item));
  };

  const handelClickNext = () => {
    if (initialId <= 93) {
      setInitialId(initialId + 8);
    }
  };

  const handelClickPrev = () => {
    if (initialId >= 16) {
      setInitialId(initialId - 8);
    }
  };

  return (
    <div className="principal">
      <div className="container">
        {posts &&
          posts.map((element: Post, index: number) => {
            if (index >= initialId && index < initialId + 8) {
              return <Card key={index} post={element} func={handleDelete} />;
            }
          })}
      </div>
      <div className="buttons">
        <button className="buttons-direction" onClick={handelClickPrev}>
          Prev
        </button>
        <button className="buttons-direction" onClick={handelClickNext}>
          Next
        </button>
      </div>
    </div>
  );
}
