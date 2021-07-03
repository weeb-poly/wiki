<template>
  <div class="card">
    <h5 class="card-header">{{ data.title }}</h5>
    <img class="card-img-top" :src="data.cover">
    <div class="card-body m-2 p-0">
      <table class="table card-text fs-7">
        <tbody>
          <tr v-for="item in data.info" :key="item.key">
            <th scope="row" v-html="$md.renderInline(item.key)"></th>
            <td v-html="$md.renderInline(item.value)"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
    data: {
      type: Object,
      required: true
    },
  },
};
</script>
