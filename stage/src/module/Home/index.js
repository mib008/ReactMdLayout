import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import HomeView from './components/HomeView';

// // Sync route definition
// export default {
//  component: HomeView,
// };


import './style/index.less';

/**
 * @class
 */
class Home extends Component {
    static propTypes = {
        location: PropTypes.any,
    };

    /**
     * @return {dom}
     */
    render() {
        return <div className='Home layout-column layout-align-center-center flex'>
            <h1 className='flex'>Material Design Layout for React</h1>
            https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
        </div>;
    }
}

export default Home;
