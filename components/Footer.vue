<template>
  <footer class="footer mt-auto">

    <div class="footer-top py-4">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Weeb Poly Institute</h3>
            <p>
              1 Chome-15-13 Sotokanda<br>
              B1F-6F<br>
              Chiyoda City, Tokyo 101-0021<br>
              Japan<br><br>
              <strong>Phone:</strong> +81 3-3252-6166 +81<br>
              <strong>Email:</strong> 42+notaweeb@wpi.moe
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4 class="mb-0">Useful Links</h4>
            <ul class="ps-0 d-grid gap-1">
              <li class="d-flex align-items-center"><NuxtLink to="/">Home</NuxtLink></li>
              <li class="d-flex align-items-center"><NuxtLink to="/mascots">Mascots</NuxtLink></li>
              <li class="d-flex align-items-center"><NuxtLink to="/archive">Archive</NuxtLink></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <p class="mb-1">
          &copy; Copyright <strong><span>Weeb Poly</span></strong>. All Rights Reserved
        </p>
        <p class="credits mb-1">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          Original Design by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </p>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a class="btn btn-sm" href="https://github.com/weeb-poly/"><i class='bx bxl-github'></i></a>
        <a class="btn btn-sm" href="https://discord.com/"><i class='bx bxl-discord'></i></a>
      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/footer';
</style>
