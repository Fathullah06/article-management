export const state = {
    token: '',
    role: ''
};

export const mutations = {
    'SET_TOKEN' (state, { token }) {
        state.token = token;
    },
    'SET_ROLE' (state, { role }) {
        state.token = role;
    }
};

export const actions = {
    setToken ({commit}, token) {
        commit('SET_TOKEN', token);
    }
};

export const getters = {
    getToken (state) {
        return state.token;
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
