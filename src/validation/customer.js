const Joi = require("joi");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const customerValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name field missing! Please enter the name",
  }),
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .custom((value, helpers) => {
      if (!value.endsWith("@gmail.com")) {
        return helpers.message('Email domain must be "gmail.com"');
      }
      return value;
    })
    .messages({
      "string.pattern.base": "Please enter a valid email address",
      "any.required": "Please enter the email",
    }),
  city: Joi.string().required().messages({
    "any.required": "City field missing! Please enter the city",
  }),
  grade: Joi.string().required().messages({
    "any.required": "Grade field missing! Please enter the grade",
  }),
});

const validateCustomer = (req, res, next) => {
  const validationResult = customerValidation.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.message });
  }

  // If validation passes, proceed to the next middleware or route handler
  next();
};

module.exports = validateCustomer;
