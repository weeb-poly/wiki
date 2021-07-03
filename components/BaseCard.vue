<template>
  <div class="card">
    <h5 class="card-header">
      <slot name="header"></slot>
    </h5>

    <img class="card-img-top" :src="src">

    <div class="card-body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>

    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>
