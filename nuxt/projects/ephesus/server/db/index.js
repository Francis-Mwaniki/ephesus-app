import { defineNitroConfig } from "nitropack";
import mongoose from "mongoose";

export default defineNitroConfig((nitroApp) => {
  const config = useRuntimeConfig();
  //connect to mongoose
  mongoose
    .connect(config.MONGO_URL)
    .then((res) => {
      console.log(`connected to db successfully`);
    })
    .catch((err) => {
      console.log(`sorry did'nt connect ${err}`);
    });
});
