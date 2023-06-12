"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api = (0, express_1.Router)();
// .use(authController)
// .use(articleController)
// .use(profileController);
exports.default = (0, express_1.Router)().use('/api', api);
