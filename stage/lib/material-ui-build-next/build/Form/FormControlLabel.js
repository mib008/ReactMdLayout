'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiFormControlLabel', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: theme.palette.common.transparent
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'default'
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: theme.spacing.unit * 2 // used for row presentation of radio/checkbox
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      userSelect: 'none'
    }
  };
}); //  weak
/* eslint-disable jsx-a11y/label-has-for */

function FormControlLabel(props) {
  var _classNames;

  var checked = props.checked,
      classes = props.classes,
      classNameProp = props.className,
      control = props.control,
      disabled = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['checked', 'classes', 'className', 'control', 'disabled', 'inputRef', 'label', 'name', 'onChange', 'value']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.hasLabel, label && label.length), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

  return _react2.default.createElement(
    'label',
    (0, _extends3.default)({ className: className }, other),
    (0, _react.cloneElement)(control, {
      disabled: typeof control.props.disabled === 'undefined' ? disabled : control.props.disabled,
      checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
      name: control.props.name || name,
      onChange: control.props.onChange || onChange,
      value: control.props.value || value,
      inputRef: control.props.inputRef || inputRef
    }),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      label
    )
  );
}

FormControlLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component appears selected.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: _propTypes2.default.element.isRequired,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The text to be used in an enclosing label element.
   */
  label: _propTypes2.default.node.isRequired,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event `change` event
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

FormControlLabel.defaultProps = {
  disabled: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(FormControlLabel);