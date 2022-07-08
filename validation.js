const Joi = require("joi");

const registerValidation = async (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string()
      .required()
      .min(6)
      .pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}"))
      .message(
        `"password" must be at least one uppercase letter, one lowercase letter and one number`
      ),
  });
  return await schema.validateAsync(data);
};

const loginValidation = async (data) => {
  const schema = Joi.object({
    email: Joi.string().max(255).required().email(),
    password: Joi.string()
      .required()
      .min(6)
      .pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}"))
      .message(
        `"password" must be at least one uppercase letter, one lowercase letter and one number`
      ),
  });
  return await schema.validateAsync(data);
};

module.exports = { registerValidation, loginValidation };
