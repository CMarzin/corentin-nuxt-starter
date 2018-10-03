/**
 *
 * Store's App Mutations
 *
 */

import {
  SET_CURRENT_PAGE
 } from './mutationsTypes.js';

export default {
  [SET_CURRENT_PAGE](state, title) {
    state.currentPage = title;
  }
};