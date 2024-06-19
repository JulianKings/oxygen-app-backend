"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _unitController = require("../controllers/unitController");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get('/', _unitController.get_units);
router.post('/add', _unitController.post_add_unit);
router["delete"]('/delete', _unitController.delete_unit);
var _default = exports["default"] = router;