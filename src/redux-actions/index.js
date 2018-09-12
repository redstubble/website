export const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';
export const UPDATE_POST_STATE = 'UPDATE_POST_STATE';

export function updatePageState(page) {
  return { type: UPDATE_PAGE_STATE, page };
}

export function updatePostState(post) {
  return { type: UPDATE_POST_STATE, post };
}
