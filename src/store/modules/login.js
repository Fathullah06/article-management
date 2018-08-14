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
    },
    setRole ({commit}, role) {
        commit('SET_ROLE', role);
    }
};

export const getters = {
    getToken (state) {
        return state.token;
    },
    getRole (state) {
        return state.role;
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
