import Vuex from 'vuex';
import appModule from './modules/app-logic';

const createStore = () => {
    // Default values when SSR is in use
    return new Vuex.Store({
      modules: {
        appLogic: appModule
      }
    });
};

export default createStore