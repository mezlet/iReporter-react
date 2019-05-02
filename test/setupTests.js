import enzyme from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configMockStore from 'redux-mock-store';
import 'dotenv/config';
import '../node_modules/regenerator-runtime/runtime';

enzyme.configure({ adapter: new Adapter() });
// jest.mock("axios");

const mockStore = configMockStore([thunk]);
export default mockStore;
