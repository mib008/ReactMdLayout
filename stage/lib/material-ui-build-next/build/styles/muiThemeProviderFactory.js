'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUI_SHEET_ORDER = undefined;

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

exports.default = muiThemeProviderFactory;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jss = require('jss');

var _styleManager = require('jss-theme-reactor/styleManager');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MUI_SHEET_ORDER = exports.MUI_SHEET_ORDER = ['MuiTextarea', 'MuiInput', 'MuiInputLabel', 'MuiGrid', 'MuiCollapse', 'MuiFade', 'MuiSlide', 'MuiBackdrop', 'MuiModal', 'MuiRipple', 'MuiTouchRipple', 'MuiButtonBase', 'MuiFormControl', 'MuiFormLabel', 'MuiFormHelperText', 'MuiFormGroup', 'MuiTypography', 'MuiPaper', 'MuiSnackbarContent', 'MuiSnackbar', 'MuiDivider', 'MuiPopover', 'MuiButton', 'MuiIconButton', 'MuiSvgIcon', 'MuiIcon', 'MuiSwitchBase', 'MuiSwitch', 'MuiCheckbox', 'MuiRadio', 'MuiRadioGroup', 'MuiSwitchLabel', 'MuiDialog', 'MuiDialogActions', 'MuiDialogContent', 'MuiDialogContentText', 'MuiDialogTitle', 'MuiTabIndicator', 'MuiTab', 'MuiTabs', 'MuiBottomNavigationButton', 'MuiBottomNavigation', 'MuiCircularProgress', 'MuiLinearProgress', 'MuiAppBar', 'MuiDrawer', 'MuiAvatar', 'MuiChip', 'MuiListItem', 'MuiListItemText', 'MuiListItemSecondaryAction', 'MuiListItemAvatar', 'MuiListItemIcon', 'MuiListSubheader', 'MuiList', 'MuiMenu', 'MuiMenuItem', 'MuiCardContent', 'MuiCardMedia', 'MuiCardActions', 'MuiCardHeader', 'MuiCard', 'MuiTextField', 'MuiTable', 'MuiTableHead', 'MuiTableRow', 'MuiTableCell', 'MuiTableBody', 'MuiTableSortLabel', 'MuiToolbar', 'MuiBadge', 'MuiMobileStepper']; //  weak
function muiThemeProviderFactory(defaultTheme) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(MuiThemeProvider, _Component);

    function MuiThemeProvider() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, MuiThemeProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.theme = undefined, _this.styleManager = undefined, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MuiThemeProvider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          styleManager: this.styleManager
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _MuiThemeProvider$cre = MuiThemeProvider.createDefaultContext(this.props),
            theme = _MuiThemeProvider$cre.theme,
            styleManager = _MuiThemeProvider$cre.styleManager;

        this.theme = theme;
        this.styleManager = styleManager;
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        if (this.styleManager !== nextProps.styleManager) {
          var _MuiThemeProvider$cre2 = MuiThemeProvider.createDefaultContext(nextProps),
              theme = _MuiThemeProvider$cre2.theme,
              styleManager = _MuiThemeProvider$cre2.styleManager;

          this.theme = theme;
          this.styleManager = styleManager;
        } else if (this.theme && nextProps.theme && nextProps.theme !== this.theme) {
          this.theme = nextProps.theme;
          this.styleManager.updateTheme(this.theme);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }], [{
      key: 'createDefaultContext',
      value: function createDefaultContext() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var theme = props.theme || defaultTheme;
        var styleManager = props.styleManager || (0, _styleManager.createStyleManager)({
          theme: theme,
          jss: (0, _jss.create)((0, _jssPresetDefault2.default)())
        });

        if (!styleManager.sheetOrder) {
          styleManager.setSheetOrder(MUI_SHEET_ORDER);
        }

        return { theme: theme, styleManager: styleManager };
      }
    }]);
    return MuiThemeProvider;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.element.isRequired,
    styleManager: _propTypes2.default.object,
    theme: _propTypes2.default.object
  }, _class.childContextTypes = {
    styleManager: _propTypes2.default.object.isRequired
  }, _temp2;
}