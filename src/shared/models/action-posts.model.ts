import { Post } from "./posts.model";

export type ActionPost = { posts: Post[]; loading: boolean; post: {} };
