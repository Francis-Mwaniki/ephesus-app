<template>
  <main
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-3 bg-gray-100 text-slate-900"
  >
    <div class="" v-for="vid in videos">
      <iframe
        class="w-full md:w-1/2 md:max-h-screen bg-gray-100 object-cover mx-auto"
        style="height: 300px; width: 100%"
        :src="`https://www.youtube.com/embed/${vid.videoId}`"
        title="LATEST SABBATH SONG UPENDO TELE_BY EPHESUS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { videoId: "Cgj3yAsrlBo" },
        { videoId: "Zr9lUG-3_cc" },
        { videoId: "J05X_RK_D6g" },
        { videoId: "oE-iMg1SpPI" },
        { videoId: "lfGOgUWzQ5U" },
      ],
    };
  },
};
</script>

<style></style>
