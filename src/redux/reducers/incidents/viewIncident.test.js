import * as types from '../../actions/action-types';
import initialState from '../../../store/initialState';
import viewIncident from './viewIncident';

const state = {
  ...initialState,
  data: [],
  isLoggedIn: false
};
describe('Incident', () => {
  it('should return initial state', () => {
    expect(viewIncident(state, {})).toEqual(state);
  });
  it('should handle view all incident Request', () => {
    expect(
      viewIncident(state, {
        type: types.VIEWINCIDENT_START
      })
    ).toEqual({
      ...state,
      isLoading: true
    });
  });
});
