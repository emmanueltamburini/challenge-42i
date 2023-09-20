"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenge_controller_1 = require("../controllers/challenge.controller");
const routes_constant_1 = require("../constants/routes.constant");
const express_validator_1 = require("express-validator");
const validateFields_middleware_1 = require("../middleware/validateFields.middleware");
const challengeRouter = (0, express_1.Router)();
challengeRouter.post(routes_constant_1.SMALLEST_DIFFERENCE, [
    (0, express_validator_1.check)('firstArray').notEmpty().isArray({ min: 1 }).custom((0, validateFields_middleware_1.validNumberArray)('firstArray')),
    (0, express_validator_1.check)('secondArray').notEmpty().isArray({ min: 1 }).custom((0, validateFields_middleware_1.validNumberArray)('secondArray')),
    validateFields_middleware_1.validateFields
], challenge_controller_1.getSmallestDifference);
challengeRouter.post(routes_constant_1.NON_CONSTRUCTIBLE_CHANGE, [
    (0, express_validator_1.check)('coins').notEmpty().isArray({ min: 1 }).custom((0, validateFields_middleware_1.validNumberArray)('coins')),
    validateFields_middleware_1.validateFields
], challenge_controller_1.getNonConstructibleChange);
exports.default = challengeRouter;
//# sourceMappingURL=challenge.routes.js.map