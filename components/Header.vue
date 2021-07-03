<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">WPI</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
          <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
          <li class="nav-item"><NuxtLink class="nav-link" to="/mascots">Mascots</NuxtLink></li>
          <li class="nav-item"><NuxtLink class="nav-link" to="/archive">Archive</NuxtLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as vars;

/*
nav {
  font-family: "Poppins", sans-serif;
}
*/

.navbar {
  background: vars.$body-bg;
  box-shadow: 0 0 18px rgba(55, 66, 59, 0.08);

  .navbar-brand {
    font-size: 30px;
    font-weight: 600;
  }

  a.nav-link {
    color: lighten(vars.$body-color, 30%);
  }

  a.navbar-brand,
  a.nav-link:hover,
  a.nuxt-link-exact-active {
    color: vars.$crimson;
  }
}
</style>
