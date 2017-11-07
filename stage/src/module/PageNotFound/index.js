import PageNotFound from './components/PageNotFound';

export default () => ({
    path: '404',
    getComponent(nextState, cb) {
        cb(null, PageNotFound);
    },
});
