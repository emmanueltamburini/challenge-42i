import { Router } from "express";
import { getSmallestDifference, getNonConstructibleChange } from "../controllers/challenge.controller";
import { NON_CONSTRUCTIBLE_CHANGE, SMALLEST_DIFFERENCE } from "../constants/routes.constant";
import { check } from "express-validator";
import { validNumberArray, validateFields } from "../middleware/validateFields.middleware";

const challengeRouter = Router();

challengeRouter.post(SMALLEST_DIFFERENCE, [
    check('firstArray').notEmpty().isArray({ min: 1 }).custom(validNumberArray('firstArray')),
    check('secondArray').notEmpty().isArray({ min: 1 }).custom(validNumberArray('secondArray')),
    validateFields
], getSmallestDifference);

challengeRouter.post(NON_CONSTRUCTIBLE_CHANGE, [
    check('coins').notEmpty().isArray({ min: 1 }).custom(validNumberArray('coins')),
    validateFields
], getNonConstructibleChange);

export default challengeRouter;