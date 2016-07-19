import Vue from 'vue'

export default {
    searchUser ({commit}, payload) {
        Vue.http.get('/user/' + payload).then((response) => {
            if (response.json().github_response_code === 200) {
                commit('set_user', response.json().data)
            } else {
                commit('set_search_error_msg', response.json().message)
            }
        })
    },

    resetErrorAndUser ({commit}) {
        commit('set_user', {})
        commit('set_search_error_msg', '')
    }
}