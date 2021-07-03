<template>
  <BaseCard :src="img">
    <template v-slot:header>
      {{ title }}
    </template>

    <template v-slot:body>
      <table class="table card-text fs-7">
        <tbody>
          <tr v-for="item in info" :key="item.key">
            <th scope="row" v-html="$md.renderInline(item.key)"></th>
            <td v-html="$md.renderInline(item.value)"></td>
          </tr>
        </tbody>
      </table>
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>
table.card-text {
  tr:last-child > * {
    border-bottom-width: 0;
  }

  th, td {
    padding: 0.25rem !important;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.fs-7 {
  font-size: 0.75rem !important;
}
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: Array,
      required: true
    },
  },
};
</script>
