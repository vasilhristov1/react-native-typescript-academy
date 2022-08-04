import { Post } from "./posts";

export interface AppState {
    editedPost: Post | undefined;
    allPosts: Post[]
  }
  
  export const AppStateStore: AppState = {
    editedPost: undefined,
    allPosts: []
  }