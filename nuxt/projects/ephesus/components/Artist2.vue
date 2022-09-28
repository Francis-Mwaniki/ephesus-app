<template>
  <main class="flex justify-center items-center mx-auto">
    <div
      class="flex justify-center items-center mx-auto sm:max-w-6xl max-w-4xl flex-col my-2"
    >
      <img src="../assets/images/ephesus.jpg" class="rounded-full h-24 w-24" alt="" />
      <!-- Title -->
      <p class="text-lg mb-4 font-bold leading-relaxed text-gray-900">
        <!-- Post Title -->
        Ephesus sardis
      </p>
      <small class="font-medium font-mono text-slate-900 p-3 text-lg">
        Ephesus Sardis is A kenyan Messianic Musician.Located in Nakuru County, Head of
        Southern Rift Messianic Youth.Enjoy the songs below.Spread love.Message of Yahshua
        Messiah.Subscribe.share & Like!
      </small>
      <a
        href="https://www.youtube.com/channel/UCFb034q690fN9Ti_0ch-yAQ"
        class="outline-none no-underline text-white font-mono after:text-red-700 flex flex-row items-center justify-center"
      >
        <span>
          <svg
            class="h-7 w-7 text-red-600 p-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg
        ></span>
        <span class="text-slate-900 hover:underline"> Youtube channel</span>
      </a>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const posts = ref([]);
    const vidId2 = ref([]);

    return { posts, vidId2 };
  },
  methods: {
    async fetchAllYt2() {
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFb034q690fN9Ti_0ch-yAQ&maxResults=10&order=relevance&key=AIzaSyAcV4XRVz4bWK4YMucLj6R89HSE9Yj4zzo"
      )
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
  components: {},
};
</script>
