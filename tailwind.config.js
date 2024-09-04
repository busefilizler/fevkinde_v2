/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        kirmizi: '#eb4224',
        turuncu: '#f37525',
        acikTuruncu: '#f8a31e',
        sari: '#fdd10f',
        acikYesil: '#a8c239',
        yesil: '#50a146',
        turkuaz: '#2ca3a2',
        mavi: '#2380c5',
        lacivet: '#3D3C3C',
        pembe: '#F14B89',
        siyah: '#3D3D3D'
      },
      fontSize: {
        xxs: ['8px', '12px'],
        xxxs: ['6px', '10px']
      }
    },
    screens: {
      tel: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
