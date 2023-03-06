<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card full-height">
            <q-card-section class="q-pt-none">
              <div
                class="full-height row justify-center items-center"
                style="padding: 100px 0px 200px 0px"
              >
                <div style="clear: both; text-align: center">
                  <img
                    src="~assets/payment-hero.png"
                    style="width: 250px; height: auto"
                  />
                  <span class="payment-content"
                    >Your bank account is connected</span
                  >
                  <p style="margin-top: 10px">
                    You're currently setup to receive payments to an account
                    ending in <b>2345</b>.
                  </p>
                  <q-btn
                    @click="confirm = true"
                    color="secondary"
                    label="Update Payment Settings"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>

  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section>
        <div class="text-h6">Please confirm</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        You are currently setup to transact with account ending in
        <b>...1234.</b> To connect a new account, you will have to initiate new
        deposits to a new account, and verify those deposits.
        <br />
        <br />
        Would you like to proceed?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="secondary" v-close-popup />
        <q-btn
          label="Continue"
          color="secondary"
          clickable
          to="/payments-update"
          v-ripple
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      confirm: ref(false),
    };
  },
});
</script>
