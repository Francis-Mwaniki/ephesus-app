<template>
  <!-- component -->
  <div
    class="h-auto w-12 flex fixed sm:left-1 left-0 sm:bottom-1/2 sm:top-10 top-10 rounded-full gap-y-6"
  >
    <!-- container -->

    <aside
      class="flex flex-col items-center bg-transparent text-slate-900 shadow sm:h-auto h-screen rounded-full mx-auto"
    >
      <!-- Side Nav Bar-->

      <ul>
        <!-- Items Section -->

        <li class="md:hover:bg-gray-900 rounded-full sm:bg-gray-700 sm:py-0 py-3">
          <div class="">
            <!-- Component starts here -->
            <a
              class="group max-w-max relative mx-1 flex flex-col items-center justify-center"
              href="#"
            >
              <!-- Text/Icon goes here -->
              <p class="text-xs text-center">
                <nuxt-link
                  to="/"
                  class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
                >
                  <span
                    ><font-awesome-icon
                      :icon="['fas', 'house']"
                      class="h-5 w-5 sm:text-white"
                  /></span>
                </nuxt-link>
              </p>
              <!-- Tooltip here -->
              <div
                class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <div class="flex max-w-xs flex-col items-center">
                  <div
                    class="rounded bg-blue-600 p-2 text-xs text-white text-center shadow-lg"
                  >
                    Home
                  </div>
                  <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                </div>
              </div>
            </a>
            <!-- Component ends here -->
          </div>
        </li>

        <li class="md:hover:bg-gray-900 rounded-full sm:bg-gray-700 sm:py-0 py-3">
          <div class="">
            <!-- Component starts here -->
            <a
              class="group max-w-max relative mx-1 flex flex-col items-center justify-center"
            >
              <!-- Text/Icon goes here -->
              <p class="text-xs text-center">
                <nuxt-link
                  to="/Songs"
                  class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
                >
                  <span>
                    <font-awesome-icon
                      :icon="['fas', 'music']"
                      class="h-5 w-5 sm:text-white"
                    />
                  </span>
                </nuxt-link>
              </p>
              <!-- Tooltip here -->
              <div
                class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <div class="flex max-w-xs flex-col items-center">
                  <div
                    class="rounded bg-blue-600 p-2 text-xs text-white text-center shadow-lg"
                  >
                    Songs
                  </div>
                  <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                </div>
              </div>
            </a>
            <!-- Component ends here -->
          </div>
        </li>

        <li class="md:hover:bg-gray-900 rounded-full sm:bg-gray-700 sm:py-0 py-3">
          <div class="">
            <!-- Component starts here -->
            <a
              class="group max-w-max relative mx-1 flex flex-col items-center justify-center"
              href="#"
            >
              <!-- Text/Icon goes here -->
              <p class="text-xs text-center">
                <nuxt-link
                  to="/videos"
                  class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
                >
                  <span
                    ><font-awesome-icon
                      :icon="['fas', 'tv']"
                      class="h-5 w-5 sm:text-white"
                  /></span>
                </nuxt-link>
              </p>
              <!-- Tooltip here -->
              <div
                class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <div class="flex max-w-xs flex-col items-center">
                  <div
                    class="rounded bg-blue-600 p-2 text-xs text-white text-center shadow-lg"
                  >
                    Videos
                  </div>
                  <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                </div>
              </div>
            </a>
            <!-- Component ends here -->
          </div>
        </li>

        <li class="md:hover:bg-gray-900 rounded-full sm:bg-gray-700 sm:py-0 py-3">
          <div class="">
            <!-- Component starts here -->
            <a
              class="group max-w-max relative mx-1 flex flex-col items-center justify-center"
              href="#"
            >
              <!-- Text/Icon goes here -->
              <p class="text-xs text-center">
                <nuxt-link
                  to="/login"
                  class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
                >
                  <span
                    ><font-awesome-icon
                      :icon="['fas', 'right-to-bracket']"
                      class="h-5 w-5 sm:text-white"
                  /></span>
                </nuxt-link>
              </p>
              <!-- Tooltip here -->
              <div
                class="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <div class="flex max-w-xs flex-col items-center">
                  <div
                    class="rounded bg-blue-600 p-2 text-xs text-white text-center shadow-lg"
                  >
                    Login
                  </div>
                  <div class="clip-bottom h-2 w-4 bg-gray-900"></div>
                </div>
              </div>
            </a>
            <!-- Component ends here -->
          </div>
        </li>

        <!-- <li class="hover:bg-gray-100">
          <a
            href="."
            class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </a>
        </li> -->
      </ul>

      <!-- <div class="mt-auto h-16 flex items-center w-full">
      
        <button
          class="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
        >
          <svg
            class="h-5 w-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div> -->
    </aside>
  </div>
</template>

<script>
export default {
  ssr: false,
};
</script>

<style></style>
