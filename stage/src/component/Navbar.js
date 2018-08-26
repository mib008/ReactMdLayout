import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import packageJson from 'package.json';

// import { withStyles } from 'material-ui/styles';
// import { withTheme } from 'material-ui/styles';

// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import InboxIcon from 'material-ui-icons/Inbox';
// import DraftsIcon from 'material-ui-icons/Drafts';

import './style/Navbar.less';

const buildState = Symbol('buildState');

/**
 * Navbar
 */
class Navbar extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        itemSource: PropTypes.array,
    };

    /**
     * @constructor
     * @param {any} props
     */
    constructor(props) {
        super(props);

        props.itemSource.forEach((page) => {
            if (page.demos && page.path === window.location.pathname) {
                window.history.pushState(this[buildState](page), page.name, page.path);
            }
        });
    }

    /**
     * buildState
     * @param {obj} page
     * @return {obj}
     */
    [buildState](page) {
        return {
            name: page.name,
            description: page.description,
            path: page.path,
            demos: page.demos,
        };
    }

    /**
     * render
     * @return {dom}
     */
    render() {
        const { classes, itemSource } = this.props;

        return (
            <div className={classes.root}>
                <List>
                    <ListItem className='layout-column'>
                        <h3>ReactMdLayout</h3>
                        <h4>version:{packageJson.version}</h4>
                    </ListItem>

                    {itemSource.map((module) =>
                        module.name ?
                            <NavLink to={{
                                pathname: module.path,
                                state: this[buildState](module),
                            }} key={module.name} activeStyle={{ color: 'white' }}>
                                <ListItem button><ListItemText primary={module.name}></ListItemText></ListItem>
                            </NavLink> :
                            <Divider key={module.key} />
                    )}
                </List>
            </div>
        );
    }
}

export default Navbar;

// const styles = (theme) => {
//    debugger;

//    return {
//        root: {
//            width: '100%',
//            maxWidth: 360,
//            background: theme.palette.background.paper,
//        },
//    };
// };

// const component = withStyles(styles)(Navbar);

// export default component;
