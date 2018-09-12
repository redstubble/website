import { UPDATE_PAGE_STATE } from '../redux-actions';
import { UPDATE_POST_STATE } from '../redux-actions';
import PageType from '../utils/pageType';

const initialPageState = {
  page: PageType.index,
  post: null
};

const changePageState = (state = initialPageState, action) => {
  switch (action.type) {
    case UPDATE_PAGE_STATE:
      return {
        ...state,
        page: action.page,
      };
      case UPDATE_POST_STATE:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

export default changePageState;
