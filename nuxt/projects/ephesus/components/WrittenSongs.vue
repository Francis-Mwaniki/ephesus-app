<template>
  <div
    class="h-full bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center"
  >
    <div class="md:w-6/12 w-full mx-auto rounded border">
      <div class="bg-white p-10 shadow-sm">
        <h3 class="text-lg font-medium text-gray-800">
          NYIMBO ZA KUMSIFU ELOHIM MUUMBA WA MBINGU NA NCHI
        </h3>
        <p class="text-sm font-light text-gray-600 my-3">
          All Messianic Song Are accorded below.Read.Sing.Praise And Spread The Gospel of
          Rev(14:6-7)
        </p>

        <div class="h-1 w-full mx-auto border-b my-5"></div>

        <!-- What is term -->
        <div
          class="transition hover:bg-indigo-50 border border-gray-300 rounded-lg"
          v-for="song in songs"
          :key="song.id"
        >
          <!-- header -->
          <div
            class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
          >
            <h3>{{ song.title }}</h3>
          </div>
          <!-- Content -->
          <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
              {{ song.desc }}
            </p>
            <button
              class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9"
            >
              Israel. Jerusalem
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

.accordion-content {
  transition: max-height 0.3s ease-out, padding 0.3s ease;
}
</style>

<script>
import { ref } from "vue";
export default {
  mounted() {
    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionContent = header.parentElement.querySelector(".accordion-content");
        let accordionMaxHeight = accordionContent.style.maxHeight;

        // Condition handling
        if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
          accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
          header.querySelector(".fas").classList.remove("fa-plus");
          header.querySelector(".fas").classList.add("fa-minus");
          header.parentElement.classList.add("bg-indigo-50");
        } else {
          accordionContent.style.maxHeight = `0px`;
          header.querySelector(".fas").classList.add("fa-plus");
          header.querySelector(".fas").classList.remove("fa-minus");
          header.parentElement.classList.remove("bg-indigo-50");
        }
      });
    });
  },
  setup() {
    let songs = ref([
      {
        id: 1,
        title: "1.BINTI WA ZAYUNI",
        desc: `1. Binti wa Zayuni kweli amevaa utukufu, amevaa jua
                    na nyota katika mwili wake, naye binti wa Babeli
                    amevaa kiulimwengu na majina ya matusi kwake
                    Mungu Mwenyenzi.
                    Jiulize ndugu yangu wewe u pande gani, kwake binti wa
                    Zayuni ama binti Babeli, binti wa Zayuni ni kanisa lile
                    teule, binti wa Babeli ni imani ilopotovu.
                    2. Unjumbe wa malaika wa tatu wahimiza tokeni kwake
                    binti Babeli hivi leo, kwani hivi karibuni ataja
                    kuangamizwa, pamoja na waliofuata maagizo yake.
                    3. Binti wa Zayuni huzituza amri kumi na ushuhuda wa
                    Yashuah kote ulimwenguni, naye binti wa Babeli
                    huifuata dunia na mafundisho yake ambayo ni
                    mapotovu`,
      },
      {
        id: 2,
        title: "5. NAINUA MACHO YANGU",
        desc: `1. Nainua macho yangu niutazame ule mlima, msaanda
                wangu watoka kwako uliyeumba mbingu na nchi.
                Ni furaha ya moyo wangu kuishi na wewe Mwokozi
                unapodumu rohoni mwangu nahodha wa maisha yangu.
                2. Ulinificha na utanificha ulinzi wako wanitosha wewe
                utendaye maajabu nina uhakika wa makuu.
                3. Nitatembea na nisichoke nipande milima na nishuke
                nivuke baharini na mito si mimi mbali ni wewe
                Bwana.
                4. Nawaombea watesi wangu wafungue macho
                wakuone warekebishe yao mienendo waone fadhili
                zako nyingi.`,
      },
      {
        id: 3,
        title: "1.4. MSIFATHAIKE",
        desc: `Msifathaike mioyoni mwenu makao ni mengi mwa
                        Baba yangu naenda kutayarisha mahali tutakapoishi
                        pamoja nanyi, sasa makao ameshayaandaa ishara
                        nyingi nimeshaziona zasema kwamba Yashuah yu
                        arudi.
                        (Kitambo tu, kitambo tu bado hatujafika mwisho wa
                        safari tumwone pia tukaishi naye aketiye juu ya kiti cha
                        enzi) x2 kitambo tu
                        2. Yangu masikio yamesikia uzuri na ukuu wa ahadi
                        walizoandaliwa wateule baada ya safari duniani, 
                        3
                        natamani kumwona Yashuah wangu nasubiri
                        kuingia mjini watakapoishi wote washindi.
                        3. Majina yetu yatakapoitwa tutafurahi na kushangilia
                        tumezipokea ahadi zetu pamoja na manabii na
                        mitume jina lako leo limeandikwa je utasomwa
                        miongoni mwao watakatifu wote wakisomwa.
                        4. Itakuwa fraha iliyoje machozi yetu akiyapanguza
                        shinda na dhiki zikifika mwisho hakuna uchungu
                        wala huzuni hakikisha vazi umesafisha uwe tayari
                        kumlaki Yashuah tuingie kwa raha ya milele`,
      },
      {
        id: 4,
        title: "KUJA KWA YASHUAH",
        desc: `1. Kuja kwa Yashuah kumekaribia sana, tarubeta ya
                Yashuah itasikika, wafu katika Yashuah
                watafufuliwa tutamlaki Yashuah mawinguni.
                Tushangilie Yashuah wetu, mfalme wa amani
                ametukomboa, tutatawala naye Yashuah, dunianai
                milele hata milele.
                2. Ni vyema tufahamu siri ndugu zangu sio wote
                watalala mavumbini walio hai katika Yashuah akija
                watabadilishwa na kumlaki
                3. Ufalme wa Yashuah wa miaka elfu moja utakuwa ni
                ufalme wa amani shetani atafungwa miaka elfu moja
                pasiwe hata mmoja anayedanganywa.
                4. Ole wao walio lala mavumbini pasipo na tumaini la
                uzima, hawatapokea ufufuo wa kwanza mbali
                watangojea hukumu ifike`,
      },
      {
        id: 5,
        title: "1.12.ITAKUWA SIKU YA AJABU",
        desc: `1. Itakuwa siku ya ajabu, Yashuah akirudi na ufalme
                    wake kuwachukua waliomwamini awapeleke zayuni
                    Halleluyah siku hiyo ya Bwan awalio watakatifu
                    wataridhi na Yashuah ooh ooh wataishi na Yashuah
                    katika mji huo milele na milele
                    2. Itakuwa furaha tele kwa wale wote waliomwamini
                    wakipewa taji ya uzima kwa kuyashinda ya dunia.
                    3. E ndugu yangu nakuhimiza mwamini Yashuah
                    maishani mwako ili ajapo na ufalme wake upewe taji
                    ya uzima.`,
      },
      {
        id: 6,
        title: "2.PALIKUWEPO NIKODEMU",
        desc: ` 1. Kama wewe umepata neno litokalo Yerusalem
                hubiria jirani yako ashikane na Wayahudi.
                Soma, Bibilia iliandikwa kwa pumzi ya Elohim, yafaa
                kwa mafundisho, kuongoza na kounya watu
                2. Nabii Isaiya alitabiri katika siku zamwisho, mataifa
                yataunnganishwa na wana Waisraeli.
                3. Jihadhari manabii wa uongo, wajao kama kondoo
                ndani yao ni umbwa mwitu, kwa vitendo
                utawatambua.
                4. Tubu dhambi upate ubatizo kwa jina la Yahshuah
                Messiah, upate ondoleo la dhambi, upokee roho wa
                kweli.
                5. Ezekieli kumi na nane, roho zote ni mali yake bali
                roho itendayo dhambi kwa hakika ndiyo itakayo
                kufa.`,
      },
      {
        id: 6,
        title: "2.PALIKUWEPO NIKODEMU",
        desc: ` 1. Kama wewe umepata neno litokalo Yerusalem
                hubiria jirani yako ashikane na Wayahudi.
                Soma, Bibilia iliandikwa kwa pumzi ya Elohim, yafaa
                kwa mafundisho, kuongoza na kounya watu
                2. Nabii Isaiya alitabiri katika siku zamwisho, mataifa
                yataunnganishwa na wana Waisraeli.
                3. Jihadhari manabii wa uongo, wajao kama kondoo
                ndani yao ni umbwa mwitu, kwa vitendo
                utawatambua.
                4. Tubu dhambi upate ubatizo kwa jina la Yahshuah
                Messiah, upate ondoleo la dhambi, upokee roho wa
                kweli.
                5. Ezekieli kumi na nane, roho zote ni mali yake bali
                roho itendayo dhambi kwa hakika ndiyo itakayo
                kufa.`,
      },
    ]);
    return { songs };
  },
};
</script>
