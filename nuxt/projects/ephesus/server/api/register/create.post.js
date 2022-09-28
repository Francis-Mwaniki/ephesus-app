import registerModel from "~~/server/model/register.model";
import { validateNewUser } from "~~/server/validation";

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
    await registerModel.create(body);
    return { message: "Signed in successfully" };
  } catch (err) {
    throw createError({
      message: err.message,
    });
  }
});
