<style></style>
<!-- Card List Section -->
<template>
  <section class="bg-gray-100 py-7 px-12">
    <VerticalNav1 />
    <h1
      class="md:text-3xl text-sm font-mono text-slate-900 flex justify-center items-center mx-auto uppercase p-1"
    >
      Messianic Gospel Artist.
    </h1>
    <Artist2 />
    <!-- Card Grid 1 -->
    <Vids1 />
  </section>
</template>

<script>
import { ref } from "vue";
import VerticalNav1 from "../components/verticalNav.vue";
import Artist2 from "../components/Artist2.vue";
import Vids1 from "~~/components/vids.vue";
export default {
  setup() {
    const posts = ref([]);
    const vidId = ref([]);
    const vidId2 = ref([]);
    const config = useRuntimeConfig();
    const fetchUrl = ref(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCusr9FtV7oVAKgMzRD1KjLA&maxResults=10&key=${config.API_KEY}`
    );
    return { posts, vidId2, vidId, fetchUrl };
  },
  methods: {
    async fetchAllYt2() {
      await fetch(this.fetchUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let videos = data.items;
          for (const video of videos) {
            let wholeVideo = video.id;
            let ytVideos = video.snippet;
            this.posts.push(ytVideos);
            this.vidId2.push(wholeVideo);
            console.log(this.vidId2);
          }
        });
    },
  },
  mounted() {
    this.fetchAllYt2();
  },
  components: { VerticalNav1, Artist2, Vids1 },
};
</script>
