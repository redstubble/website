export enum PageEnum {
  UPDATE_PAGE_STATE = "UPDATE_PAGE_STATE",
  UPDATE_POST_STATE = "UPDATE_POST_STATE",
}

type UpdatePage = {
  type: PageEnum.UPDATE_PAGE_STATE;
  page: string;
};

type UpdatePost = {
  type: PageEnum.UPDATE_POST_STATE;
  post: string;
};

export type PageAction = UpdatePage | UpdatePost;

export function updatePageState(page: string): UpdatePage {
  return { type: PageEnum.UPDATE_PAGE_STATE, page };
}

export function updatePostState(post: string): UpdatePost {
  return { type: PageEnum.UPDATE_POST_STATE, post };
}
