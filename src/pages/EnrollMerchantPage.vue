<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card full-height">
            <q-card-section class="q-pt-none">
              <div
                class="full-height row justify-center items-center"
                style="padding: 100px 0px 0px 0px"
              >
                <div style="clear: both; text-align: center">
                  <span class="payment-content" style="font-weight: 500"
                    >Get paid directly by lenders with Acorn Merchant</span
                  >
                  <p style="margin-top: 10px">
                    Ensure fast payments directly from lenders by seeing if
                    <br />you qualify for Acorn Merchant, our in-direct lending
                    service.
                  </p>

                  <div class="row q-col-gutter-md" style="padding: 30px">
                    <div class="col-md-4 col-xs-12">
                      <q-item>
                        <q-item-section>
                          <div style="padding-bottom: 15px">
                            <q-avatar
                              color="info"
                              icon="sell"
                              text-color="white"
                            />
                          </div>
                          <q-item-label>Offer 0% Options</q-item-label>
                          <q-item-label caption lines="2"
                            >Pick the offers you want to show your customers,
                            and choose fees on your terms</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                    </div>

                    <div class="col-md-4 col-xs-12">
                      <q-item>
                        <q-item-section>
                          <div style="padding-bottom: 15px">
                            <q-avatar
                              color="info"
                              icon="payments"
                              text-color="white"
                            />
                          </div>
                          <q-item-label
                            >Ensure instant payments to you</q-item-label
                          >
                          <q-item-label caption lines="2"
                            >You get paid directly by lenders, ensuring quick
                            and frictionless payments</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                    </div>

                    <div class="col-md-4 col-xs-12">
                      <q-item>
                        <q-item-section>
                          <div style="padding-bottom: 15px">
                            <q-avatar
                              color="info"
                              icon="devices"
                              text-color="white"
                            />
                          </div>
                          <q-item-label
                            >Easy use and mobile friendly</q-item-label
                          >
                          <q-item-label caption lines="2"
                            >Easily request funds from your customers with our
                            simple to use Contractor Portal</q-item-label
                          >
                        </q-item-section>
                      </q-item>
                    </div>
                  </div>

                  <q-btn color="secondary" label="Begin Onboarding Now" />
                  <div style="text-align: center">
                    <img
                      src="~assets/enroll-illustration.png"
                      style="width: 400px; height: auto; clear: both"
                    />
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
import { ref } from 'vue';
</script>
