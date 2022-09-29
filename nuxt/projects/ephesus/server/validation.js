import Joi from "joi";

export const validateNewUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  repeatPassword: Joi.string().min(8).required(),
});

export const validateExistingUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
