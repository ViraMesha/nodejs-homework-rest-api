const { validateBody } = require("./validateBody");
const { validateUpdateBody } = require("./validateBody");
const { validateUpdateFavoriteBody } = require("./validateBody");
const isValidId = require("./isValidId");
const authentificate = require("./authentificate");
const upload = require("./upload");
module.exports = {
  validateBody,
  validateUpdateBody,
  validateUpdateFavoriteBody,
  isValidId,
  authentificate,
  upload,
};
