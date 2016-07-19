import _ from 'lodash'

export default {
    user: state => state.user,

    user_exists: state => { return !_.isEmpty(state.user) }
}
