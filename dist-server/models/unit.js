"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});
var unitModel = _mongoose["default"].model("unit", userSchema);
var _default = exports["default"] = unitModel;