<template>
  <header class="bg-transparent flex items-center justify-between px-[10%] w-full h-full">
    <!-- Logo -->
    <div class="w-[20%]">
      <img src="@/assets/fevkinde_logo.webp" alt="fevkinde_ajans_logo" />
    </div>

    <!-- Masaüstü Menü -->
    <nav class="hidden md:flex flex-row gap-2 sm:gap-3 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-10">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="font-bold tel:text-xxs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation"
        :class="item.color"
        @click="scrollToSection(item.id)"
      >
        {{ item.label }}
      </div>
    </nav>

    <!-- Mobil Menü (Hamburger) -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-2xl focus:outline-none">
        {{ isMenuOpen ? '✖' : '☰' }}
      </button>
    </div>

    <!-- Mobil Menü İçeriği -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="absolute top-[6vh] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="font-bold tel:text-sm sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl custom-font cursor-pointer hover-underline-animation py-2"
          :class="item.color"
          @click="scrollToSection(item.id); toggleMenu()"
        >
          {{ item.label }}
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { id: 'hakkimizda', label: 'HAKKIMIZDA', color: 'red-underline' },
        { id: 'digital', label: 'DIGITAL', color: 'orange-underline' },
        { id: 'event', label: 'EVENT', color: 'sari-underline' },
        { id: 'referans', label: 'REFERANS', color: 'green-underline' },
        { id: 'iletisim', label: 'İLETİŞİM', color: 'blue-underline' },
      ]
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
/* Menü açılma animasyonu */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter, .slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
