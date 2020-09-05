const Joi = require("@hapi/joi");

// Validation Register
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(6).required().messages({
      // Muốn biết type loại gì, thì sang userRoute bỏ message đi xem cả lỗi
      "string.alphanum": `Username không chứa ký tự đặc biệt`,
      "string.min": `Username chứa ít nhất 6 ký tự`,
      "string.empty": `Username không được để trống`,
    }),
    email: Joi.string().required().email().messages({
      "string.email": `Email không hợp lệ`,
      "string.empty": `Email không được để trống`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": `Password chứa ít nhất 6 ký tự`,
      "string.empty": `Password không được để trống`,
    }),
    repassword: Joi.any().equal(Joi.ref("password")).messages({
      "any.only": `Mật khẩu không trùng khớp`,
    }),
  });
  return schema.validate(data);
};

// Validation Signin
const signinValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().messages({
      "string.email": `Email không hợp lệ`,
      "string.empty": `Email không được để trống`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.min": `Password chứa ít nhất 6 ký tự`,
      "string.empty": `Password không được để trống`,
    }),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.signinValidation = signinValidation;
