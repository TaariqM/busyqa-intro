const crypto = require("node:crypto");

function hashPassword(password) {
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  return hash;
}

module.exports = {
  hashPassword,
};
