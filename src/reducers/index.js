import { UPDATE_PAGE_STATE } from '../actions';
import PageType from '../utils/pageType';

const initialPageState = {
  page: PageType.index,
};

function changePageState(state = initialPageState, action) {
  switch (action.type) {
    case UPDATE_PAGE_STATE:
      return {
        ...state,
        page: action.state.page,
      };
    default:
      return state;
  }
}

export default changePageState;
