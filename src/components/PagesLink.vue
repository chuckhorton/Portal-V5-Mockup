<template>

<div class="q-pa-md" style="max-width: 350px">
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
            <q-item clickable :to="link">
              <q-item-section v-if="icon" avatar>
                <q-icon :name="icon" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ title }}</q-item-label>
                <q-item-label caption>{{ caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>


<!--
  -->
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagesLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
