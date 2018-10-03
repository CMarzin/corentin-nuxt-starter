/**
 *
 * Store's App Actions
 *
 */

import {
  SET_CURRENT_PAGE
 } from './mutationsTypes.js';

export default {
  setCurrentPage: ({ commit }, title) => {
    commit(SET_CURRENT_PAGE, title);
  }
};