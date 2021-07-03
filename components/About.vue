<template>
  <section id="about" class="about py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2">
          <img src="https://cdn.wpi.moe/main/think.png" class="img-fluid" alt="Think, Shirley! Think!">
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Think, Shirley! Think!</h3>
          <p>
            You have one of the top Cybersecurity Teams, but you still haven't figured out how to isolate your network.
          </p>
          <p>
            You keep on raising tuition, but you keep cutting programs.
          </p>
          <p>
            Your reign will outlast every insignificant little being on this campus.
          </p>
          <p>
            You'll live to see this campus crumble to dust and blow away.
          </p>
          <p>
            <b>What will you have after 500 years?</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as vars;

.about .content {
  h3 {
    font-weight: 600;
    font-size: 26px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding-bottom: 10px;
    }

    i {
      font-size: 20px;
      padding-right: 4px;
      color: vars.$primary;
    }
  }
}
</style>
