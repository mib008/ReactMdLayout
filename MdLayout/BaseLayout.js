import { Component } from 'react';
import PropTypes from 'prop-types';

const validateAttributeValue = Symbol('validateAttributeValue');
const findIn = Symbol('findIn');
const extractAlignAxis = Symbol('extractAlignAxis');
const translateClassName = Symbol('translateClassName');

const SUFFIXES = /(-gt)?-(sm|md|lg|print)/g;
const WHITESPACE = /\s+/g;

const FLEX_OPTIONS = ['grow', 'initial', 'auto', 'none', 'noshrink', 'nogrow'];
const LAYOUT_OPTIONS = ['row', 'column'];
const ALIGNMENT_MAIN_AXIS = ['', 'start', 'center', 'end', 'stretch', 'space-around', 'space-between'];
const ALIGNMENT_CROSS_AXIS = ['', 'start', 'center', 'end', 'stretch'];

/**
 *  
 */
class BaseLayout extends Component {
    static propTypes = {
        'className': PropTypes.string,
        'layout-align': PropTypes.string,
    };

    /**
     * 
     * @param {any} layoutType
     */
    constructor(layoutType) {
        super();
        this.layoutType = layoutType;
    }

    /**
     * For the Layout attribute value, validate or replace with default
     * fallback value
     * @param {any} className
     * @param {any} value
     * @param {any} updateFn
     * @return {any} value
     */
    [validateAttributeValue](className, value, updateFn) {
        let origValue;

        let axis;

        switch (className.replace(SUFFIXES, '')) {
            case 'layout':
                if (!this[findIn](value, LAYOUT_OPTIONS)) {
                    // 'row';
                    value = LAYOUT_OPTIONS[0];
                }
                break;
            case 'flex':
                if (!this[findIn](value, FLEX_OPTIONS)) {
                    if (isNaN(value) || typeof value === 'boolean') {
                        value = '';
                    }
                }
                break;
            case 'flex-offset':
            case 'flex-order':
                if (!value || isNaN(+value)) {
                    value = '0';
                }
                break;
            case 'layout-align':
                axis = this[extractAlignAxis](value);
                value = `${axis.main}-${axis.cross}`;
                break;
            case 'layout-padding':
            case 'layout-margin':
            case 'layout-fill':
            case 'layout-wrap':
            case 'layout-nowrap':
                value = '';
                break;
            default:
                value = undefined;
                break;
        }

        if (value != origValue) {
            updateFn(value);
        }

        return value ? value.trim() : '';
    }

    /**
     * 
     * @param {any} item
     * @param {any} list
     * @param {any} replaceWith
     * @return {boolean}
     */
    [findIn](item, list, replaceWith) {
        item = replaceWith && item ? item.replace(WHITESPACE, replaceWith) : item;

        let found = false;
        if (item) {
            list.forEach((it) => {
                it = replaceWith ? it.replace(WHITESPACE, replaceWith) : it;
                found = found || (it === item);
            });
        }
        return found;
    }

    /**
     * 
     * @param {any} attrValue
     * @return {array}
     */
    [extractAlignAxis](attrValue) {
        let axis = {
            main: 'start',
            cross: 'stretch',
        };
        let values;

        attrValue = (attrValue || '');

        if (attrValue.indexOf('-') === 0 || attrValue.indexOf(' ') === 0) {
            // For missing main-axis values
            attrValue = 'none' + attrValue;
        }

        values = attrValue.toLowerCase().trim().replace(WHITESPACE, '-').split('-');
        if (values.length && (values[0] === 'space')) {
            // for main-axis values of 'space-around' or 'space-between'
            values = [values[0] + '-' + values[1], values[2]];
        }

        if (values.length > 0) axis.main = values[0] || axis.main;
        if (values.length > 1) axis.cross = values[1] || axis.cross;

        if (ALIGNMENT_MAIN_AXIS.indexOf(axis.main) < 0) axis.main = 'start';
        if (ALIGNMENT_CROSS_AXIS.indexOf(axis.cross) < 0) axis.cross = 'stretch';

        return axis;
    }

    /**
     * 
     * @param {any} props
     * @param {function} filter
     * @return {string} className
     */
    [translateClassName](props, filter) {
        let layoutAttributes = Object.entries(props)
            .filter(filter)
            .map(([key, value]) => [key, this[validateAttributeValue](key, value, () => { })]);

        // console.debug(layoutAttributes);

        return layoutAttributes.reduce((result, [key, value]) => {
            return result.concat(' ', value.length > 0 ? `${key}-${value}` : key);
        }, props.className || '').trim();
    }

    /**
     * @param {react.element} child
     * @return {string} className
     */
    buildClass(child) {
        if (!child || child.$$typeof !== Symbol.for('react.element')) return '';

        return this[translateClassName](
            child.props,
            ([key, value]) => key.startsWith('layout') || key.startsWith('flex'));
    }

    /**
     * @param {react.element} child
     * @return {string} className
     */
    buildChildClass(child) {
        if (!child || child.$$typeof !== Symbol.for('react.element')) return '';

        return this[translateClassName](
            child.props,
            ([key, value]) => key.startsWith('flex'));
    }
}

export default BaseLayout;
