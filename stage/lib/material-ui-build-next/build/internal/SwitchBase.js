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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = createSwitch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _checkBoxOutlineBlank = require('../svg-icons/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSwitchBase', {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
}); //  weak

var _ref2 = _react2.default.createElement(_checkBoxOutlineBlank2.default, null);

var _ref3 = _react2.default.createElement(_checkBox2.default, null);

function createSwitch() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultIcon = _ref.defaultIcon,
      defaultIcon = _ref$defaultIcon === undefined ? _ref2 : _ref$defaultIcon,
      _ref$defaultCheckedIc = _ref.defaultCheckedIcon,
      defaultCheckedIcon = _ref$defaultCheckedIc === undefined ? _ref3 : _ref$defaultCheckedIc,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === undefined ? 'checkbox' : _ref$inputType,
      switchStyleSheet = _ref.styleSheet;

  /**
   * @ignore - internal component.
   */
  var SwitchBase = function (_Component) {
    (0, _inherits3.default)(SwitchBase, _Component);

    function SwitchBase() {
      var _ref4;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SwitchBase);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {}, _this.input = null, _this.button = null, _this.isControlled = null, _this.handleInputChange = function (event) {
        var newChecked = void 0;

        if (_this.isControlled) {
          newChecked = !_this.props.checked;
        } else {
          newChecked = !_this.state.checked;
          if (_this.input && _this.input.checked !== newChecked) {
            _this.input.checked = newChecked;
          }
          _this.setState({ checked: !_this.state.checked });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, newChecked);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchBase, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var props = this.props;


        this.isControlled = props.checked !== undefined;

        if (!this.isControlled) {
          // not controlled, use internal state
          this.setState({
            checked: props.defaultChecked !== undefined ? props.defaultChecked : false
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            checkedProp = _props.checked,
            classNameProp = _props.className,
            checkedClassName = _props.checkedClassName,
            checkedIcon = _props.checkedIcon,
            disabled = _props.disabled,
            disabledClassName = _props.disabledClassName,
            iconProp = _props.icon,
            inputProps = _props.inputProps,
            inputRef = _props.inputRef,
            name = _props.name,
            onChange = _props.onChange,
            tabIndex = _props.tabIndex,
            value = _props.value,
            other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'className', 'checkedClassName', 'checkedIcon', 'disabled', 'disabledClassName', 'icon', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'value']);


        var checked = this.isControlled ? checkedProp : this.state.checked;
        var classes = this.context.styleManager.render(styleSheet);
        var switchClasses = switchStyleSheet ? this.context.styleManager.render(switchStyleSheet) : {};

        var className = (0, _classnames2.default)(classes.root, switchClasses.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(switchClasses.checked, checkedClassName), checked), (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(switchClasses.disabled, disabledClassName), disabled), _classNames));

        var icon = checked ? checkedIcon : iconProp;

        if (typeof icon === 'string') {
          icon = _react2.default.createElement(
            _Icon2.default,
            null,
            icon
          );
        }

        return _react2.default.createElement(
          _IconButton2.default,
          (0, _extends3.default)({
            component: 'span',
            className: className,
            disabled: disabled,
            tabIndex: null,
            role: undefined,
            rootRef: function rootRef(node) {
              _this2.button = node;
            }
          }, other),
          icon,
          _react2.default.createElement('input', (0, _extends3.default)({
            ref: function ref(node) {
              _this2.input = node;
              if (inputRef) {
                inputRef(node);
              }
            },
            type: inputType,
            name: name,
            checked: this.isControlled ? checkedProp : undefined,
            onChange: this.handleInputChange,
            className: classes.input,
            disabled: disabled,
            tabIndex: tabIndex,
            value: value
          }, inputProps))
        );
      }
    }]);
    return SwitchBase;
  }(_react.Component);

  /**
   ** NB: If changed, please update Checkbox, Switch and Radio
   ** so that the API documentation is updated.
   **/


  SwitchBase.defaultProps = {
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon,
    disableRipple: false
  };
  SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * If `true`, the component appears selected.
     */
    checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    /**
     * The CSS class name of the root element when checked.
     */
    checkedClassName: _propTypes2.default.string,
    /**
     * The icon to display when the component is checked.
     * If a string is provided, it will be used as a font ligature.
     */
    checkedIcon: _propTypes2.default.node,
    /**
     * @ignore
     */
    className: _propTypes2.default.string,
    /**
     * @ignore
     */
    defaultChecked: _propTypes2.default.bool,
    /**
     * If `true`, the switch will be disabled.
     */
    disabled: _propTypes2.default.bool,
    /**
     * The CSS class name of the root element when disabled.
     */
    disabledClassName: _propTypes2.default.string,
    /**
     * If `true`, the ripple will be disabled.
     */
    disableRipple: _propTypes2.default.bool,
    /**
     * The icon to display when the component is unchecked.
     * If a string is provided, it will be used as a font ligature.
     */
    icon: _propTypes2.default.node,
    /**
     * Properties applied to the `input` element.
     */
    inputProps: _propTypes2.default.object,
    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: _propTypes2.default.func,
    /*
     * @ignore
     */
    name: _propTypes2.default.string,
    /**
     * Callback fired when the  is changed.
     *
     * @param {object} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: _propTypes2.default.func,
    /**
     * @ignore
     */
    tabIndex: _propTypes2.default.string,
    /**
     * The value of the component.
     */
    value: _propTypes2.default.string
  } : {};

  SwitchBase.contextTypes = {
    styleManager: _customPropTypes2.default.muiRequired
  };

  return SwitchBase;
}