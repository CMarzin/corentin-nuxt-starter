/**
 *
 * Store's App State
 *
 */

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
  currentPage: 'home',
  version: '1.0.0'
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__ : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}