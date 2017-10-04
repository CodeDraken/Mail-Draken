import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedHeader, { Header } from '../Header'

describe('Header Component', () => {
  describe('connected rendering', () => {
    const initialState = {auth: null}
    const mockStore = configureStore()
    let store

    beforeEach(() => {
      store = mockStore(initialState)
    })

    it('renders the connected component', () => {
      shallow(<ConnectedHeader store={store} />)
    })

    it('auth prop matches state', () => {
      const wrapper = shallow(<ConnectedHeader store={store} />)

      expect(wrapper.prop('auth')).toEqual(initialState.auth)
    })
  })

  describe('shallow rendering', () => {
    it('renders without crashing', () => {
      shallow(<Header auth />)
    })

    it('renders a logout button only when logged in', () => {
      const loggedIn = shallow(<Header auth />)
      const loggedOut = shallow(<Header auth={false} />)

      expect(loggedIn.find('.btn--logout')).toHaveLength(1)
      expect(loggedOut.find('.btn--logout')).toHaveLength(0)
    })
  })
})
