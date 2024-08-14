export interface Post {
  id: string;
  author: string | null;
  message: string;
  image: string | null;
}

export interface PostWithoutId {
  author: string | null;
  message: string;
  image: string | null;
}
