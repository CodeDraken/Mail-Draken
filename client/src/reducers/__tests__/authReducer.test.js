import authReducer from '../authReducer'
import { GET_CURRENT_USER } from '../../actions/types'

const user = {
  '_id': '123',
  'googleId': '321',
  'email': 'test@example.com',
  'githubId': null
}

describe('Auth Reducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(null)
  })

  it('handles GET_CURRENT_USER', () => {
    const userAction = { type: GET_CURRENT_USER, payload: user }
    const noUserAction = { type: GET_CURRENT_USER, payload: null }

    expect(authReducer(undefined, userAction)).toEqual(user)
    expect(authReducer(undefined, noUserAction)).toBeFalsy()
  })
})
