import { PageAction, PageEnum } from "../redux-actions/index";
import { PageTypes } from "../utils/pageType";
import { objectAssignTypeSafety } from "../util-lib/generics";

type PageState = {
  currentPage: PageTypes;
  previousPage: PageTypes;
};

export const getInitialReduxState = (): PageState => ({
  currentPage: PageTypes.index,
  previousPage: PageTypes.index,
});

const ChangePageState = (
  state = getInitialReduxState(),
  action: PageAction
) => {
  switch (action.type) {
    case PageEnum.UPDATE_PAGE_STATE:
      const newState1 = objectAssignTypeSafety(state, {
        currentPage: action.page as PageTypes,
      });
      return newState1;
    case PageEnum.UPDATE_POST_STATE:
      const newState2 = objectAssignTypeSafety(state, {
        previousPage: action.post as PageTypes,
      });
      return newState2;
    default:
      return state;
  }
};

export { ChangePageState };
