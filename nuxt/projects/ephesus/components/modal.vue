<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
</style>

<template>
  <div id="app" class="h-screen bg-gray-100 overflow-hidden">
    <!-- Modal trigger -->
    <button
      @click="showModal = !showModal"
      class="bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-md px-6 py-3 mx-auto block text-white transition duration-500 ease-in-out mt-32"
    >
      Open modal
    </button>
    <!-- ./Modal trigger -->
    <div
      class="flex items-center justify-center absolute h-screen top-0 left-0"
    ></div>
    <transition
      name="custom"
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated animate__bounceOutUp"
    >
      <!-- Modal -->
      <div
        v-if="showModal"
        class="w-11/12 lg:w-full max-w-xl z-20 mx-auto bg-white flex flex-col relative self-center shadow-2xl rounded-md"
      >
        <!-- Modal header -->
        <div
          class="p-6 border-b-4 border-gray-200 text-lg font-bold text-indigo-400"
        >
          Modal title
        </div>
        <!-- ./Modal header -->

        <!-- Modal body -->
        <div class="p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis ipsam cupiditate illum laborum atque voluptatibus ut
          doloremque excepturi quisquam repellendus dolor deserunt totam
          tempore, laboriosam earum sapiente esse praesentium.
        </div>
        <!-- ./Modal body -->

        <!-- Modal footer -->
        <div class="border-t-4 border-gray-200 p-6 flex justify-end">
          <button
            @click="showModal = false"
            class="bg-green-400 hover:bg-green-500 focus:outline-none transition px-4 py-2 rounded-md text-white transition duration-500 ease-in-out"
          >
            Close Modal
          </button>
        </div>
        <!-- ./Modal footer -->
      </div>
      <!-- ./Modal -->
    </transition>

    <transition
      name="custom"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <!-- Overlay -->
      <div
        v-if="showModal"
        class="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"
      ></div>
      <!-- ./Overlay -->
    </transition>
  </div>
</template>

<script>
/*  src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js" */
</script>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
