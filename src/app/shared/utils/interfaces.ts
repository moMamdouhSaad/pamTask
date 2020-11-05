export interface Post {
  id: number;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export interface Comment {
  postId: number;
  username: string;
  content: string;
}

export interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Post[];
}
