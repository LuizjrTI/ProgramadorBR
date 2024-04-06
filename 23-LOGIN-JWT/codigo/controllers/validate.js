const joi = require("joi");

const registerValidade = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data);
};

module.exports = registerValidade;
