import Joi from "joi";

export const gameSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  stockTotal: Joi.number().required().positive(),
  pricePerDay: Joi.number().required().positive()
})