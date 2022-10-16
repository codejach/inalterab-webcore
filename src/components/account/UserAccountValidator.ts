import Joi from 'joi';

const UserAccountValidator = Joi.object({
  nickname: Joi.string().required().min(3).max(20)
})

export default UserAccountValidator
