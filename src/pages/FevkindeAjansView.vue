<template>
  <div class="w-full h-full">
    <FevkindeAjansLayout>
      <template #sliderApp>
        <SliderApp />
      </template>
      <template #missionApp>
        <MissionApp />
      </template>
      <template #marketingApp>
        <MarketingApp />
      </template>
      <template #eventApp>
        <EventApp />
      </template>
      <template #jobApp>
        <JobApp />
      </template>
      <template #referenceApp>
        <ReferenceApp />
      </template>
      <template #footer>
        <Footer />
      </template>
    </FevkindeAjansLayout>
  </div>
</template>
<script setup>
import FevkindeAjansLayout from '@/layout/FevkindeAjansLayout.vue'
import SliderApp from '@/components/Sections/SliderApp.vue'
import MissionApp from '@/components/Sections/MissionApp.vue'
import MarketingApp from '@/components/Sections/MarketingApp.vue'
import EventApp from '@/components/Sections/EventApp.vue'
import JobApp from '@/components/Sections/JobApp.vue'
import ReferenceApp from '@/components/Sections/ReferenceApp.vue'
import Footer from '@/components/Footer/FooterApp.vue'
</script>
<style></style>
