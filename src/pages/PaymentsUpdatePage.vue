<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card full-height">
            <q-card-section class="q-pt-none">
              <div class="full-height row justify-center items-center">
                <div class="col-md-8 col-xs-12">
                  <div class="" style="padding-top:50px;">

                       <q-banner class="bg-primary text-white" style="border-radius:4px;">
                        <template v-slot:avatar>
                          <q-icon name="info" color="white" />
                        </template>
                          <p>To get started, please confirm your bank account ending in <b>...1234</b>. We will send two deposits to your bank account, and later you will verify the amount of those deposits to complete the connect.</p>
                      </q-banner>
                    <br />
        
                    <q-stepper
                      v-model="step"
                      ref="stepper"
                      color="primary"
                      animated
                      flat
                      vertical
                    >
                      <q-step
                        :name="1"
                        title="Send Deposit"
                        icon="settings"
                        :done="step > 1"
                      >
                        <div class="">
                         
                          <q-spacer />
                          <q-space />
                          <p><b>Select account type</b></p>
                          <div class="q-gutter-sm">
                            <q-radio v-model="bank_type" val="personal" label="Personal" />
                            <q-radio v-model="bank_type" val="business" label="Business" />
                          </div>
                          <br />
                          <q-select outlined v-model="account_type" :options="account_type_options" label="Select account type" />
                          <br />
                          <q-input outlined v-model="name_on_account" label="Name on Account" />
                          <br />
                          <q-input outlined type="number" v-model="account_number" label="Bank Account Number" />
                          <br />
                          <q-input outlined type="number" v-model="verify_account_number" label="Verify Bank Account Number" />
                          <br />
                          <q-input outlined type="number" v-model="routing_number" label="Routing Number" />
                          <br />
                          <br />
                          <p>By clicking "Send Deposits", you accept the <a href="/">User Terms</a></p>
                        <q-stepper-navigation>
                          <q-btn
                            @click="$refs.stepper.next()"
                            color="secondary"
                            label="Send Deposits"
                          />
                          <q-btn
                            v-if="step > 1"
                            flat
                            color="secondary"
                            @click="$refs.stepper.previous()"
                            label="Back"
                            class="q-ml-sm"
                          />
                          <q-btn
                            flat
                            color="secondary"
                            label="Cancel"
                            clickable
                            to="/payments"
                            class="q-ml-sm"
                          />
                        </q-stepper-navigation>
                        </div>
                      </q-step>

                      <q-step
                        :name="2"
                        title="Verify Deposit Amounts"
                        icon="create_new_folder"
                        :done="step > 2"
                      >
                        UI for Entering Deposits...

                        <q-stepper-navigation>
                         
                          <q-btn
                            flat
                            color="secondary"
                            label="Finished"
                            clickable
                            to="/payments"
                            class="q-ml-sm"
                          />
                        </q-stepper-navigation>
                      </q-step>

                    </q-stepper>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      step: ref(1),
      bank_type: ref(''),
      account_type: ref(null),
      routing_number: ref(''),
      verify_account_number: ref(''),
      account_number: ref(''),
      name_on_account: ref(''),
      account_type_options: [
        'Checking Account',
        'Savings Account',
        'Other',
      ],
    };
  },
});
</script>
