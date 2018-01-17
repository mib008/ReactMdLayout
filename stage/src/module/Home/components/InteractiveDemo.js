import React, { Component } from 'react';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import './InteractiveDemo.less';

const buildForm = Symbol('buildForm');
const buildClass = Symbol('buildClass');

const dataDefine = {
    formDefine: [{
        key: 'direction', displayName: 'Layout Direction', itemSource: [
            { key: 'row', value: 'layout-row' },
            { key: 'column', value: 'layout-column' },
        ],
    },
    {
        key: 'justify', displayName: 'Alignment in Layout Direction (vertical)', itemSource: [
            { key: 'none', value: 'default' },
            { key: 'start (default)', value: 'start' },
            { key: 'center', value: 'center' },
            { key: 'end', value: 'end' },
            { key: 'space-around', value: 'space-around' },
            { key: 'space-between', value: 'space-between' },
        ],
    },
    {
        key: 'alignItems', displayName: 'Alignment in Perpendicular Direction (horizontal)', itemSource: [
            { key: 'none', value: 'default' },
            { key: 'start', value: 'start' },
            { key: 'center', value: 'center' },
            { key: 'end', value: 'end' },
            { key: 'stretch (default)', value: 'stretch' },
        ],
    },
    ],
};

/**
 * @class
 */
class InteractiveDemo extends Component {
    /**
     * @constructor
     * @param {any} props
     */
    constructor(props) {
        super(props);

        this.state = {
            direction: 'layout-column',
            justify: 'start',
            alignItems: 'stretch',
        };
    }

    /**
     * @private
     * @param {any} dataModel
     * @return {dom}
     */
    [buildForm](dataModel) {
        return dataModel.map((formField) =>
            <FormControl key={formField.key} className='flex-33'>
                <FormLabel>{formField.displayName}</FormLabel>
                <RadioGroup aria-label="direction"
                    value={this.state[formField.key]}
                    onChange={(event, value) => this.handleChange(event, value, formField.key)} >
                    {
                        formField.itemSource.map(
                            (option) => <FormControlLabel key={option.key} value={option.value} control={<Radio />} label={option.key} />
                        )
                    }
                </RadioGroup>
            </FormControl>
        );
    }

    /**
     * 
     * @param {any} param0
     * @return {string}
     */
    [buildClass]({ direction, justify, alignItems }) {
        return `${direction} layout-align-${justify.replace('default', 'start')}-${alignItems.replace('default', 'stretch')}`;
    }

    /**
     * @event
     * @param {any} event
     * @param {any} value
     * @param {any} key
     */
    handleChange(event, value, key) {
        this.setState({ [key]: value });
    }

    /**
     * @function
     * @return {dom}
     */
    render() {
        let layoutClass = this[buildClass](this.state);

        return <section className='InteractiveDemo layout-row layout-align-center-stretch'>
            <div className='container flex-80 layout-column'>
                <span className='layout-padding'>{`Layout class: ${layoutClass}`}</span>
                <div className='content flex'>
                    <div className={ `dynamic-layout ${layoutClass}` }>
                        <div className='layout-padding layout-margin' style={{ padding: '10px' }}>Cell 1</div>
                        <div className='layout-padding layout-margin' style={{ padding: '20px' }}>Cell 2</div>
                        <div className='layout-padding layout-margin' style={{ padding: '30px' }}>Cell 3</div>
                    </div>
                </div>
                <form className='form layout-row layout-padding'>
                    {this[buildForm](dataDefine.formDefine)}
                </form>
            </div>
        </section>;
    }
}

export default InteractiveDemo;
