<template lang="">
  <div
    id="iletisim"
    class="bg-black w-full h-full px-[7%] flex flex-col justify-center gap-8 pb-3 overflow-y-auto"
  >
    <div class="flex justify-between px-[5%] pt-[5%]">
      <div
        class="flex justify-center flex-col pl-[3%] -rotate-3 font-black custom-font italic w-[50%]"
      >
        <div
          class="font text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#ffff] uppercase"
        >
          {{ currentSlogan }}
        </div>
        <div
          class="font text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#ffff] uppercase"
        >
          EVERY DAY
        </div>
      </div>
      <div class="flex justify-center items-center polygon !-rotate-3 -mt-[5%]">
        <div
          class="bg-[#D7D4D1] hover:bg-[#b2b1af] text-black custom-font items-center text-xxs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black px-5 py-2 !-rotate-3 italic"
        >
          <a href="mailto:hi@fevkinde.com.tr">BİZE ULAŞIN</a>
        </div>
      </div>
    </div>
    <div class="bg-black w-full flex items-center flex-col">
      <div class="flex justify-center">
        <img
          src="@/assets/FevkindeBeyazLogo.webp"
          alt="fevkinde_ajans_logo"
          class="pt-[2%] w-1/6 sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/6 2xl:w-1/6"
        />
      </div>
      <div class="w-full px-[5%] text-[#D7D4D1]">
        <div class="divider w-full py-[3%]"></div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row items-center gap-2">
            <div
              class="text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline"
            >
              <i class="fa-solid fa-location-dot"></i>
              /İstanbul & Balıkesir
            </div>
          </div>
          <div class="flex flex-row items-center gap-2 cursor-pointer">
            <div
              class="text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline"
            >
              <i class="fa fa-youtube-play"></i>

              <a href="https://www.youtube.com/@fevkindereklam" target="_blank"> /Fevkindereklam</a>
            </div>
          </div>
          <div class="flex flex-row items-center gap-2 cursor-pointer">
            <div
              class="text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline"
            >
              <i class="fa-brands fa-linkedin-in"></i>

              <a href="https://www.linkedin.com/company/fevkindeajans/" target="_blank">
                /Fevkindeajans</a
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-2 cursor-pointer">
            <div
              class="text-xxxs sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl hover:underline"
            >
              <i class="fa fa-instagram"></i>

              <a href="https://www.instagram.com/fevkindeajans/" target="_blank"> /Fevkindeajans</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slogan: [
        'Campaign',
        'Design',
        'Marketing',
        'Event',
        'Creative',
        'Social Media',
        'Roadshow',
        'Project',
        'Production',
        'Lansman'
      ],
      currentSloganIndex: 0
    }
  },
  computed: {
    currentSlogan() {
      return this.slogan[this.currentSloganIndex]
    }
  },
  mounted() {
    this.intervalId = setInterval(this.changeSlogan, 1000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    changeSlogan() {
      this.currentSloganIndex = (this.currentSloganIndex + 1) % this.slogan.length
    }
  }
}
</script>
<style>
.polygon {
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
}
.divider {
  border-bottom: 1px solid #e0e0e0;
  height: 1px;
}
</style>
