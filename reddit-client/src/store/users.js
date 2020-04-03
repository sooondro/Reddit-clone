import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  users: [],
};

/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
/* eslint-disable no-param-reassign */

const getters = {
  usersById(state) {
    return state.users.reduce((byId, user) => {
      byId[user.id] = user;
      return byId;
    }, {});
  },
};

/* eslint-enable no-param-reassign */

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', db.collection('users'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
