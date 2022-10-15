import Joi from "joi";

const RegisterValidator = Joi.object({
  account: Joi.string().email({tlds: {allow: false}}).required(),
  password: Joi.string().min(3).max(15).required(),
  passwordConfirm: Joi.any().valid(Joi.ref('password'))
})

export default RegisterValidator
