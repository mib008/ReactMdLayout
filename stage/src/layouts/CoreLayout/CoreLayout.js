import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../component/Header';

export const CoreLayout = ({ children }) => (
    <div className='container text-center'>
        <Header />
        <div className='core-layout__viewport'>
            {children}
        </div>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default CoreLayout;
