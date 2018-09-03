export const state = {
    token: '',
    role: '',
    username: ''
};

export const mutations = {
    'SET_TOKEN' (state, { token }) {
        state.token = token;
    },
    'SET_ROLE' (state, { role }) {
        state.role = role;
    },
    'SET_USERNAME' (state, {username}) {
        state.username = username;
    }
};

export const actions = {
    setToken ({commit}, token) {
        commit('SET_TOKEN', token);
    },
    setRole ({commit}, role) {
        commit('SET_ROLE', role);
    },
    setUsername ({commit}, username) {
        commit('SET_USERNAME', username);
    }
};

export const getters = {
    getToken (state) {
        return state.token;
    },
    getRole (state) {
        return state.role;
    },
    getUsername (state) {
        return state.username;
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
