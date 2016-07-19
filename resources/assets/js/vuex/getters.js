import _ from 'lodash'

export default {
    user: state => state.user,

    user_exists: state => { return !_.isEmpty(state.user) },

    search_error_msg: state => state.searchErrorMsg,

    search_error_exists: state => state.searchErrorMsg == ''
}
