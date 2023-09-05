<template>
  <div class="comments">
    <Comment v-for="comment in data" :key="comment.Pid" :data="comment" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const Comment = defineComponent({
  name: 'Comment',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div class="comment">
      <div class="comment-header">
        <span>{{ data.Pusername }}</span>
        <span>{{ data.Ptime }}</span>
      </div>
      <div class="comment-content">{{ data.Pcontext }}</div>
      <div class="comment-footer">
        <span>{{ data.Pnum }} 点赞</span>
      </div>
      <Comment v-if="data.Child" v-for="child in data.Child" :key="child.Pid" :data="child" />
    </div>
  `,
})

export default defineComponent({
  name: 'Comments',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style scoped>
.comment {
  margin-bottom: 10px;
}

.comment-header {
  font-weight: bold;
}

.comment-footer {
  font-size: 12px;
}
</style>