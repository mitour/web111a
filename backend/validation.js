const Joi = require("joi");

const registerValidation = async (data) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().max(20).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string()
      .required()
      .min(6)
      .pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}"))
      .message(
        `"password" must be at least one uppercase letter, one lowercase letter and one number`
      ),
    confirm_password: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .messages({
        "any.only": `Password and confirm password does not match.`,
      }),
    role: Joi.string().valid("admin", "supervisor", "basic"),
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
      .message(`email or password is wrong.`)
      .messages({ "string.min": "email or password is wrong." }),
  });
  return await schema.validateAsync(data);
};

const updateValidation = async (data) => {
  if (Object.keys(data).includes("password")) {
    const schema = Joi.object({
      old_password: Joi.string()
        .required()
        .min(6)
        .pattern(
          new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}")
        )
        .message(`"password" is wrong`),
      password: Joi.string()
        .required()
        .min(6)
        .pattern(
          new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}")
        )
        .message(
          `"password" must be at least one uppercase letter, one lowercase letter and one number`
        ),
      confirm_password: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages({
          "any.only": `Password and confirm password does not match.`,
        }),
    });
    return await schema.validateAsync(data);
  }
  const schema = Joi.object({
    name: Joi.string().alphanum().max(20),
    email: Joi.string().max(255).email(),
    avatar: Joi.string(),
    role: Joi.string().valid("admin", "supervisor", "basic"),
  });
  return await schema.validateAsync(data);
};

module.exports = { registerValidation, loginValidation, updateValidation };
