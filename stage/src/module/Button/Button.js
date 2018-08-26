import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Button from '@material-ui/core/Button';

import './style/Button.less';

// const styles = (theme) => {
//    return {
//        button: {
//            margin: theme.spacing.unit,
//        },
//        input: {
//            display: 'none',
//        },
//    };
// };

/**
 * @param {any} props
 * @return {dom}
 */
function RaisedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <div>
                <Button className={classes.button}>Default</Button>
                <Button color="primary" className={classes.button}>Primary</Button>
                <Button color="accent" className={classes.button}>Accent</Button>
                <Button color="contrast" className={classes.button}>Contrast</Button>
                <Button color="accent" disabled className={classes.button}>Disabled</Button>
            </div>
            <div>
                <Button raised className={classes.button}>Default raised</Button>
                <Button raised color="primary" className={classes.button}>Primary raised</Button>
                <Button raised color="accent" className={classes.button}>Accent raised</Button>
                <Button raised color="contrast" className={classes.button}>Contrast raised</Button>
                <Button raised color="accent" disabled className={classes.button}>Disabled raised</Button>
            </div>
        </div>
    );
}

RaisedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(RaisedButtons);

export default RaisedButtons;
