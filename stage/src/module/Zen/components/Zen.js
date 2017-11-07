import React, { Component } from 'react';
import PropTypes from 'prop-types';
import spinner from 'react-spinkit';

/**
 * 
 */
class Zen extends Component {
    /**
     * @return {obj}
     */
    render() {
        const { fetchZen, clearZen, zen: { fetching, text } } = this.props;

        return (
            <div>
                <div className='loading'>
                    {fetching ?
                        <spinner spinnerName='double-bounce' /> : ''
                    }
                </div>
                <div>
                    <button className='btn btn-default' onClick={fetchZen}>
                        {fetching ? 'Fetching...' : 'Fetch'}
                    </button>
                    &nbsp;&nbsp;
          <button className='btn btn-default' onClick={clearZen}>Clear</button>
                </div>
                <div>
                    {text.map((item) => (
                        <h1 key={item.id}>{item.text}</h1>
                    ))}
                </div>
            </div>
        );
    }
}

Zen.propTypes = {
    zen: PropTypes.object.isRequired,
    fetchZen: PropTypes.object.object,
    clearZen: PropTypes.object.object,
};

export default Zen;
