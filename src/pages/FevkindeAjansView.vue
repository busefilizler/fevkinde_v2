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
import { defineAsyncComponent } from 'vue'
import FevkindeAjansLayout from '@/layout/FevkindeAjansLayout.vue'
import SliderApp from '@/components/Sections/SliderApp.vue'

const MissionApp = defineAsyncComponent(() => import('@/components/Sections/MissionApp.vue'))
const MarketingApp = defineAsyncComponent(() => import('@/components/Sections/MarketingApp.vue'))
const EventApp = defineAsyncComponent(() => import('@/components/Sections/EventApp.vue'))
const JobApp = defineAsyncComponent(() => import('@/components/Sections/JobApp.vue'))
const ReferenceApp = defineAsyncComponent(() => import('@/components/Sections/ReferenceApp.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer/FooterApp.vue'))
</script>
