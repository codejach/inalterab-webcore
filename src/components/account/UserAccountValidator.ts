import Joi from 'joi';

const UserAccountValidator = Joi.object({
  nickname: Joi.string().required().min(1).max(20)
})

export default UserAccountValidator
