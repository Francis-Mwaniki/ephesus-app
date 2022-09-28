<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/images/catoon.png"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Login in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Welcome</a
          >
        </p>
      </div>
      <form class="mt-8 space-y-6">
        <input type="hidden" name="email" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              name="email"
              type="email"
              autocomplete="email"
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              name="password"
              type="password"
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <!--  <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Remember me</label
            >
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div> -->
        <!-- added today -->
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <div class="">
              <!-- Component starts here -->
              <a
                class="group max-w-max relative mx-1 flex flex-col items-center justify-center p-1 text-white"
                href="#"
              >
                <!-- Text/Icon goes here -->
                <p class="text-xs text-center">Login</p>
                <!-- Tooltip here -->
                <div
                  class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <div class="flex max-w-xs flex-col items-center">
                    <div
                      class="rounded bg-gray-900 p-2 text-xs text-center shadow-lg"
                    >
                      Login
                    </div>
                    <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                  </div>
                </div>
              </a>
              <!-- Component ends here -->
            </div>
          </button>
        </div>
        <div>
          <nuxt-link to="/signUp">
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <div class="">
                <!-- Component starts here -->
                <a
                  class="group max-w-max relative mx-1 flex flex-col items-center justify-center p-1 text-white"
                  href="#"
                >
                  <!-- Text/Icon goes here -->
                  <p class="text-xs text-center">Sign in</p>
                  <!-- Tooltip here -->
                  <div
                    class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <div class="flex max-w-xs flex-col items-center">
                      <div
                        class="rounded bg-gray-900 p-2 text-xs text-center shadow-lg"
                      >
                        Sign in
                      </div>
                      <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                    </div>
                  </div>
                </a>
                <!-- Component ends here -->
              </div>
            </button>
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  setup() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    function onSubmit(values) {
      alert(JSON.stringify(values, null));
    }
  },
};
</script>
<style>
.clip-bottom {
  clip-path: polygon(100% 50%, 0 0, 100% 0, 50% 100%, 0 0);
}
</style>
