import Joi from "joi";

const LoginValidator = Joi.object({
  account: Joi.string().email({tlds: {allow: false}}).required(),
  password: Joi.string().required()
})

export default LoginValidator
