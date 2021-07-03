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
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/navigation';
</style>
