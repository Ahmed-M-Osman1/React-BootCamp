"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

console.log('hi');

var VisibilityToggle = /*#__PURE__*/function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  var _super = _createSuper(VisibilityToggle);

  function VisibilityToggle(props) {
    var _this;

    _classCallCheck(this, VisibilityToggle);

    _this = _super.call(this, props);
    _this.handleShowState = _this.handleShowState.bind(_assertThisInitialized(_this));
    _this.test = _this.test.bind(_assertThisInitialized(_this));
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "handleShowState",
    value: function handleShowState() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "test",
    value: function test() {
      console.log('test');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visible Toggle"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleShowState
      }, this.state.visibility ? 'Hide details' : 'Show details'), this.state.visibility && /*#__PURE__*/React.createElement("p", null, "There is a lot of details here"));
    }
  }]);

  return VisibilityToggle;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(VisibilityToggle, null), appRoot); // const appRoot = document.getElementById('app')
// const showState = {
//     showState: false
// }
// const BTNFunction = () => {
//     showState.showState = !showState.showState
//     renderFunction()
// }
// const renderFunction = () =>{
//     const vDOM = (<div>
//         <h1>Visible Toggle</h1>
//         <button onClick={BTNFunction}>{showState.showState? 'Hide detail':'Show  detail'}</button>
//         {showState.showState && <p>There Is a lot of detail Here</p>}
//         <div></div>
//         </div>)
//     ReactDOM.render(vDOM,appRoot)
// }
// renderFunction()
