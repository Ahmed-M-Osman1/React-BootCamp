"use strict";

console.log("App.js is running!"); // JSX - JavaScript XML

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Indecision App V 1.0"), /*#__PURE__*/React.createElement("p", null, "this is paragraph"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item One"), /*#__PURE__*/React.createElement("li", null, "Item Two")));
var tampleteTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ahmed Mamdouh Ahemd"), /*#__PURE__*/React.createElement("p", null, "Age: 28"), /*#__PURE__*/React.createElement("p", null, " Location: Cairo"));
var appRoot = document.getElementById("app");
ReactDOM.render(tampleteTwo, appRoot);
