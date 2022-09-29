import registerModel from "~~/server/model/register.model";
import { validateExistingUser } from "~~/server/validation";
import bycrypt from "bcryptjs";
export default defineEventHandler(async (event) => {
  //get data
  let body = await useBody(event);
  //validate data
  let { error } = validateExistingUser.validate(body);
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
    let user = await registerModel.findOne({ email: email });
    if (!user) {
      return { message: "User is not found" };
    } else {
      const validPass = await bycrypt.compare(password, user.password);
      if (!validPass) return { message: "Email or password is wrong" };
      return { message: "logged in successfully" };
    }
  } catch (err) {
    throw createError({
      message: err.message,
    });
  }
});
