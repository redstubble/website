import { PageAction, PageEnum } from "../redux-actions/index";
import { PageTypes } from "../utils/pageType";

type PageState = {
  page: string;
  post: string | undefined;
};

const initialPageState: PageState = {
  page: PageTypes.index,
  post: undefined,
};

const ChangePageState = (state = initialPageState, action: PageAction) => {
  switch (action.type) {
    case PageEnum.UPDATE_PAGE_STATE:
      return {
        ...state,
        page: action.page,
      };
    case PageEnum.UPDATE_POST_STATE:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

export { ChangePageState };
