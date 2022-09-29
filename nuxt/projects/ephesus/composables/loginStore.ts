import { defineStore } from "pinia";
import { IexistingUser } from "~~/types";
import useToast from "./useToast";
export const useLoginStore = defineStore("login-store", {
  state: () => ({
    users: [] as IexistingUser[],
  }),
  actions: {
    //create a new book
    async create(user: IexistingUser) {
      await $fetch("/api/login/create", {
        method: "POST",
        body: user,
      })
        .catch((err) => {
          useToast().error(err.data.message);
        })
        .then(async (res) => {
          let successMsg = "logged in successfully";
          let msg = await res.message;
          if (msg == successMsg) return useToast().success(successMsg);
          useToast().error(msg);
        });
    },
    //update a book
  },
});
