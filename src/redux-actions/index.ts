import { PageTypes } from "../utils/pageType";

export enum PageEnum {
  UPDATE_PAGE_STATE = "UPDATE_PAGE_STATE",
  UPDATE_POST_STATE = "UPDATE_POST_STATE",
}

type UpdatePage = {
  type: PageEnum.UPDATE_PAGE_STATE;
  page: PageTypes;
};

type UpdatePost = {
  type: PageEnum.UPDATE_POST_STATE;
  post: PageTypes;
};

export type PageAction = UpdatePage | UpdatePost;

export function updatePageState(page: PageTypes): UpdatePage {
  return { type: PageEnum.UPDATE_PAGE_STATE, page };
}

export function updatePostState(post: PageTypes): UpdatePost {
  return { type: PageEnum.UPDATE_POST_STATE, post };
}
