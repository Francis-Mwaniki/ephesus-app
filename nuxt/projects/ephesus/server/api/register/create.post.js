import registerModel from "~~/server/model/register.model";
import { validateNewUser } from "~~/server/validation";
import bycrypt from "bcryptjs";
export default defineEventHandler(async (event) => {
  //get data
  let body = await useBody(event);
  //validate data
  let { error } = validateNewUser.validate(body);
  //if error exist send error
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }
  //if no error try catch block
  try {
    const { email } = body;
    const { password } = body;
    const { repeatPassword } = body;
    let emailExist = await registerModel.findOne({ email: email });
    if (password != repeatPassword) {
      return { message: "password does not match" };
    } else if (emailExist) {
      return { message: "email already exists" };
    } else {
      const salt = await bycrypt.genSalt(10);
      const hashedPassword = await bycrypt.hash(password, salt);
      const user = new registerModel({
        email: email,
        password: hashedPassword,
        repeatPassword: hashedPassword,
      });
      await registerModel.create(user);
      return { message: "signed in successfully" };
    }
  } catch (err) {
    throw createError({
      message: err.message,
    });
  }
});
