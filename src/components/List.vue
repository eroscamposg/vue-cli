<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(fruit, index) in arrangedFruits"
        :key="fruit.id"
        @click="add(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ index }} - {{ fruit.name }}
        <span class="badge badge-primary badge-pill">
          {{ fruit.quantity }}
        </span>
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-danger btn-block mt-4"
      @click="resetValues"
    >
      Reset values
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "List",
  computed: {
    ...mapState(["fruits"]),
    arrangedFruits(state) {
      return state.fruits.sort((a, b) => b.quantity - a.quantity);
    }
  },
  methods: {
    ...mapMutations(["add", "resetValues"])
  }
};
</script>
