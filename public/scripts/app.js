"use strict";

console.log("App.js is running!"); // JSX - JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: 'Put ',
  option: ['one', 'two']
};
var templateThree = /*#__PURE__*/React.createElement("div", null, app.subtitle ? /*#__PURE__*/React.createElement("p", null, app.subtitle) : false, app.option.length > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Here are your option :"), /*#__PURE__*/React.createElement("ol", null, app.option.map(function (option) {
  return /*#__PURE__*/React.createElement("li", {
    key: option
  }, option);
}))) : false);
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Indecision App V 1.0"), /*#__PURE__*/React.createElement("p", null, "this is paragraph"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item One"), /*#__PURE__*/React.createElement("li", null, "Item Two")));
var user = {
  name: 'Ahmed',
  age: 28,
  location: 'Cairo'
};

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  } else {
    return 'Unknown';
  }
}

var tampleteTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById("app");
ReactDOM.render(tampleteTwo, appRoot);
