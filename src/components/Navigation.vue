<template>
  <div class="container-fluid flex flex-col sticky top-0 shadow-lg relative uppercase">
    <div class="container-fluid bg-gradient-to-r from-teal-400 to-blue-400 flex items-center px-2">
      <ul class="container mx-auto flex flex-wrap justify-between h-16 items-center select-none flex-1">
        <router-link :to="{name : 'Home'}">
          <img src="../../public/img/ssm-trans.png" class="h-10"/>
        </router-link>

        <router-link :to="{name : 'Mlbb'}" class="lg:block hidden u">
          Mlbb
        </router-link>

        <router-link :to="{name : 'About'}" class="lg:block hidden">
          About us
        </router-link>

        <div class="lg:hidden block">
          <svg v-if="!expanded" @click="expanded=true" aria-hidden="true" focusable="false" data-prefix="fas"
               data-icon="bars"
               class="svg-inline--fa fa-bars fa-w-14 h-6" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>

          <svg v-if="expanded" @click="expanded=false" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
               class="svg-inline--fa fa-times fa-w-11 h-6" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 352 512">
            <path fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
          </svg>

        </div>
      </ul>
    </div>

    <div
        class="lg:hidden block container-fluid bg-gray-300 flex flex-col items-center absolute w-full transition duration-200 ease-in-out"
        style="top:4rem" v-if="expanded">
      <router-link :to="{name : 'Mlbb'}" class="py-2">
        Mlbb
      </router-link>

      <router-link :to="{name : 'About'}" class="py-3">
        About us
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation.vue",

  data() {
    return {
      expanded: false,
    }
  },
}
</script>

<style scoped>
.router-link-active {
  color: green;
  font-weight: bold;
}
</style>