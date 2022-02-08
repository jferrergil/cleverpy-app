import { ICard } from "../../shared/models/card.model";

export const Card = ({post, func}: ICard) => {
  return <div className='card'>
  <div className='circle'>
    <h2 className='card-user'>
      {post.title}
    </h2>
  </div>
  <div className='content'>
    <p className='car-title'> {post.body}</p>
    <p className='card-body'>{post.userId} </p>
    <button
      className='card-button'
      onClick={() => func(post)}
    >
      DELETE
    </button>
  </div>
</div>
};
