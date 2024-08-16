export interface Post {
    id: string;
    author: string | null;
    message: string;
    image: string | null;
}

export interface PostMutation {
    author: string | null;
    message: string;
    image: File | null;
}