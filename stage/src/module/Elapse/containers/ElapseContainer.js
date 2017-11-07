import { connect } from 'react-redux';
import { plus } from '../';

import Elapse from '../';

const mapDispatchtoProps = {
    plus,
};

const mapStateToProps = (state) => ({
    elapse: state.elapse,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Elapse);
