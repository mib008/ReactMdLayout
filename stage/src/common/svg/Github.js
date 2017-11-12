import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} param0
 * @return {dom}
 */
function Github({ width, height, fill, onClick }) {
    return (
        <div className="Github-container" onClick={onClick}>
            <svg className='Github' fill={fill} viewBox="0 0 24 24" width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <path d="M 12.007 0 C 6.12 0 1.1 4.27 0.157 10.08 c -0.944 5.813 2.468 11.45 8.054 13.312 c 0.19 0.064 0.397 0.033 0.555 -0.084 c 0.16 -0.117 0.25 -0.304 0.244 -0.5 v -2.042 c -3.33 0.735 -4.037 -1.56 -4.037 -1.56 c -0.22 -0.726 -0.694 -1.35 -1.334 -1.756 c -1.096 -0.75 0.074 -0.735 0.074 -0.735 c 0.773 0.103 1.454 0.557 1.846 1.23 c 0.694 1.21 2.23 1.638 3.45 0.96 c 0.056 -0.61 0.327 -1.178 0.766 -1.605 c -2.67 -0.3 -5.462 -1.335 -5.462 -6.002 c -0.02 -1.193 0.42 -2.35 1.23 -3.226 c -0.327 -1.015 -0.27 -2.116 0.166 -3.09 c 0 0 1.006 -0.33 3.3 1.23 c 1.966 -0.538 4.04 -0.538 6.003 0 c 2.295 -1.5 3.3 -1.23 3.3 -1.23 c 0.445 1.006 0.49 2.144 0.12 3.18 c 0.81 0.877 1.25 2.033 1.23 3.226 c 0 4.607 -2.805 5.627 -5.476 5.927 c 0.578 0.583 0.88 1.386 0.825 2.206 v 3.29 c -0.005 0.2 0.092 0.393 0.26 0.507 c 0.164 0.115 0.377 0.14 0.565 0.063 c 5.568 -1.88 8.956 -7.514 8.007 -13.313 C 22.892 4.267 17.884 0.007 12.008 0 Z" />
            </svg>
        </div>
    );
}
Github.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    onClick: PropTypes.func,
};
Github.defaultProps = {
    width: 8,
    height: 8,
    fill: '#106CC8',
    onClick: null,
};
export default Github;
