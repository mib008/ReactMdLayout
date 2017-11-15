import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import CodeIcon from 'material-ui-icons/Code';
import Tabs, { Tab } from 'material-ui/Tabs';

// import { componentMap } from '../../module';

import './style/DemoContainer.less';

const onClickIconButton = Symbol('onClickIconButton');
const onChangeIndexTab = Symbol('onChangeIndexTab');

/**
 * refactor: HOC component
 * @param {Component} Wrapper
 * @return {Container}
 */
const DemoContainer = (Wrapper) => {
    /**
     * @class
     */
    class WrapperComponent extends Component {
        static propTypes = {
            name: PropTypes.string,
            description: PropTypes.string,
            code: PropTypes.array,
        };

        /**
         * @constructor
         * @param {obj} props
         */
        constructor(props) {
            super(props);

            this.state = {
                expand: false,
                selectedTab: 0,
            };

            // This binding is necessary to make `this` work in the callback
            this[onClickIconButton] = this[onClickIconButton].bind(this);
            this[onChangeIndexTab] = this[onChangeIndexTab].bind(this);
        }

        /**
         * componentWillMount
         */
        componentWillMount() {
            // let Component = componentMap.get(this.props.component);
            // this.demoComponent = new Component();
            console.debug('HOC will mount');
        }

        /**
         * componentDidMount
         */
        componentDidMount() {
            console.debug('HOC did mount');
        }

        /**
         * componentWillUnmount
         */
        componentWillUnmount() {
            console.debug('HOC will unmount');
        }

        /**
         * componentDidUpdate
         * @param {any} prevProps
         * @param {any} prevState
         */
        componentDidUpdate(prevProps, prevState) {
            if (window.prettyPrint) window.prettyPrint();
        }

        /**
         * @event
         * @param {eventobj} event
         */
        [onClickIconButton](event) {
            this.setState({ expand: !this.state.expand });
        }

        /**
         * @event
         * @param {eventobj} event
         * @param {any} selectedTab
         */
        [onChangeIndexTab](event, selectedTab) {
            this.setState({ selectedTab });
        }

        /**
         * @return {obj}
         */
        render() {
            // let TabContainer = this[TabContainer];

            return (
                <div className='DemoContainer layout-row layout-align-center-center'>
                    <section className='DemoSection flex flex-gt-sm-80'>
                        <div className='DemoHead layout-column'>
                            <div className='layout-row layout-align-center-start'>
                                <h3>{this.props.name}</h3>
                                <div className='flex'></div>
                                <IconButton className='icon' color="contrast" aria-label="Show Code" onClick={this[onClickIconButton]}>
                                    <CodeIcon focusable='false' />
                                </IconButton>
                            </div>

                            <div>{this.props.description}</div>
                        </div>

                        <div className={`CodeWrap expand-${this.state.expand} layout-column`}>
                            <Tabs index={this.state.selectedTab} className='CodeWrap-Tabs' onChange={this[onChangeIndexTab]} >
                                {this.props.code.map((code) => <Tab key={code.name} label={code.name}></Tab>)}
                            </Tabs>
                            <div className='TabContainer flex layout-column '>
                                <pre className={`prettyprint linenums lang-${this.props.code[this.state.selectedTab].type}`}>{this.props.code[this.state.selectedTab].content}</pre>
                            </div>
                        </div>

                        <div className='DemoBody'>
                            <Wrapper {...this.props} />
                        </div>
                    </section>
                </div>
            );
        }
    }

    return WrapperComponent;
};

export default DemoContainer;
