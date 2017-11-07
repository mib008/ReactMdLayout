import { injectReducer } from '../../store/reducers';
import Zen from './containers/ZenContainer';
import reducer from '.';

export default (store) => ({
    path: 'zen',
    getComponent(nextState, cb) {
        injectReducer(store, { key: 'zen', reducer });
        cb(null, Zen);
    },
});
