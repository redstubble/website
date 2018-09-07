import { UPDATE_PAGE_STATE } from '../redux-actions';
import PageType from '../utils/pageType';

const initialPageState = {
  page: PageType.index,
};

const changePageState = (state = initialPageState, action) => {
  switch (action.type) {
    case UPDATE_PAGE_STATE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default changePageState;
