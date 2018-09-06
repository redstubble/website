export const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';

export function updatePageState(page) {
  return { type: UPDATE_PAGE_STATE, page };
}
