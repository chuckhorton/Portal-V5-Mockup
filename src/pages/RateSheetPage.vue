<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card">
            <q-card-section class="grey-card-header">
              <div class="card-heading">Your Rate Sheet</div>
              <div class="card-heading-subtext">
                *All products have a 5 month purchase window
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pt-none">
              <div class="row q-col-gutter-md" style="padding: 30px">
                <div class="col-md-4 col-xs-12">
                  <q-item>
                    <q-item-section top avatar>
                      <q-avatar color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Promotion motivated customers</q-item-label>
                      <q-item-label caption lines="2"
                        >"I normally pay cash"</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-item>
                    <q-item-section top avatar>
                      <q-avatar color="secondary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label
                        >Interest Rate Sensitive Customers</q-item-label
                      >
                      <q-item-label caption lines="2"
                        >"I won't pay over X% interest rate"</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <div class="col-md-4 col-xs-12">
                  <q-item>
                    <q-item-section top avatar>
                      <q-avatar color="info" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Payment Sensitive Customers</q-item-label>
                      <q-item-label caption lines="2"
                        >"I can only pay $X per month"</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <div class="">
                <q-table
                  :rows="rowYourRateSheet"
                  :columns="columnsYourRateSheet"
                  row-key="name"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        <span v-if="col.value == ' '">
                          <q-avatar
                            color="secondary"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                        </span>
                        <span v-if="col.value == '  '">
                          <q-avatar
                            color="secondary"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                          <q-avatar
                            color="info"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                        </span>
                        <span v-if="col.value == '   '">
                          <q-avatar
                            color="secondary"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                          <q-avatar
                            color="info"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                          <q-avatar
                            color="primary"
                            size="20px"
                            style="padding: 0px 5px"
                          ></q-avatar>
                        </span>
                        <span v-else>
                          {{ col.value }}
                        </span>
                      </q-td>
                      <q-td align="right">
                        <q-btn flat round color="primary" icon="more_vert" />
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>

                <br />
                <q-btn
                  style="width: 100%"
                  color="primary"
                  disable
                  label="Save changes"
                />
              </div>
            </q-card-section>
          </q-card>

          <br />
          <br />

          <q-card flat bordered class="">
            <div
              class="rate-offers-heading"
            >
              Add additional offers to your Rate Sheet
            </div>
            <q-separator />

            <q-expansion-item
              bordered
              separator
              expanded
              label="Same As Cash"
              class="rate-expansion-heading"
            >
              <q-card>
                <q-card-section>
                  <q-table
                    :rows="rowSameAsCash"
                    :columns="columnsSameAsCash"
                    row-key="name"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          <span v-if="col.value == ' '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '  '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '   '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="primary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-else>
                            {{ col.value }}
                          </span>
                        </q-td>
                        <q-td align="right">
                          <q-btn outline color="primary" label="Add to Rates" />
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              class="rate-expansion-heading"
              label="Fixed Rates"
            >
              <q-card>
                <q-card-section>
                  <q-table
                    :rows="rowSameAsCash"
                    :columns="columnsSameAsCash"
                    row-key="name"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          <span v-if="col.value == ' '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '  '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '   '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="primary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-else>
                            {{ col.value }}
                          </span>
                        </q-td>
                        <q-td align="right">
                          <q-btn outline color="primary" label="Add to Rates" />
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              class="rate-expansion-heading"
              label="Zero Interest"
            >
              <q-card>
                <q-card-section>
                  <q-table
                    :rows="rowSameAsCash"
                    :columns="columnsSameAsCash"
                    row-key="name"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          <span v-if="col.value == ' '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '  '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '   '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="primary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-else>
                            {{ col.value }}
                          </span>
                        </q-td>
                        <q-td align="right">
                          <q-btn outline color="primary" label="Add to Rates" />
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              class="rate-expansion-heading"
              label="Fixed Payments"
            >
              <q-card>
                <q-card-section>
                  <q-table
                    :rows="rowSameAsCash"
                    :columns="columnsSameAsCash"
                    row-key="name"
                  >
                    <template v-slot:body="props">
                      <q-tr :props="props">
                        <q-td
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          <span v-if="col.value == ' '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '  '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-if="col.value == '   '">
                            <q-avatar
                              color="secondary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="info"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                            <q-avatar
                              color="primary"
                              size="20px"
                              style="padding: 0px 5px"
                            ></q-avatar>
                          </span>
                          <span v-else>
                            {{ col.value }}
                          </span>
                        </q-td>
                        <q-td align="right">
                          <q-btn outline color="primary" label="Add to Rates" />
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-card>

          <q-space />
          <q-space />
          <br />
          <br />

          <q-card bordered flat class="my-card">
            <q-expansion-item
              bordered
              separator
              expanded
              class="rate-expansion-heading"
              label="Offer Codes"
            >
            <q-card-section>
              <div class="row" style="text-align: right">
                <div class="col-12">
                  <q-btn
                    outline
                    color="secondary"
                    icon-right="add"
                    :size="xs"
                    label="Add New Offer Code"
                  />
                </div>
              </div>
            </q-card-section>


              <q-card flat>
                <q-card-section>
                  <q-card>
                    <div class="row bg-grey-2">
                      <div class="col offer-heading">Multi-Product Offer</div>
                      <div class="col toggle-heading" style="text-align:right;">
                        <q-toggle v-model="nav_toggle_1" color="blue"></q-toggle>
                      </div>
                    </div>
                    <q-table
                      :rows="rowSameAsCash"
                      :columns="columnsSameAsCash"
                      flat
                      row-key="name"
                    >
                      <template v-slot:body="props">
                        <q-tr :props="props">
                          <q-td
                            v-for="col in props.cols"
                            :key="col.name"
                            :props="props"
                          >
                            <span v-if="col.value == ' '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '  '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '   '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="primary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-else>
                              {{ col.value }}
                            </span>
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-card>
                </q-card-section>
              </q-card>


              <q-card flat>
                <q-card-section>
                  <q-card>
                    <div class="row bg-grey-2">
                      <div class="col offer-heading">Spring Patio Offer</div>
                      <div class="col toggle-heading" style="text-align:right;">
                        <q-toggle v-model="nav_toggle_2" color="blue"></q-toggle>
                      </div>
                    </div>
                    <q-table
                      :rows="rowSameAsCash"
                      :columns="columnsSameAsCash"
                      flat
                      row-key="name"
                    >
                      <template v-slot:body="props">
                        <q-tr :props="props">
                          <q-td
                            v-for="col in props.cols"
                            :key="col.name"
                            :props="props"
                          >
                            <span v-if="col.value == ' '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '  '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '   '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="primary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-else>
                              {{ col.value }}
                            </span>
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-card>
                </q-card-section>
              </q-card>



               <q-card flat>
                <q-card-section>
                  <q-card>
                    <div class="row bg-grey-2">
                      <div class="col offer-heading">3 Months No Interest Offer</div>
                      <div class="col toggle-heading" style="text-align:right;">
                        <q-toggle v-model="nav_toggle_3" color="blue"></q-toggle>
                      </div>
                    </div>
                    <q-table
                      :rows="rowSameAsCash"
                      :columns="columnsSameAsCash"
                      flat
                      row-key="name"
                    >
                      <template v-slot:body="props">
                        <q-tr :props="props">
                          <q-td
                            v-for="col in props.cols"
                            :key="col.name"
                            :props="props"
                          >
                            <span v-if="col.value == ' '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '  '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-if="col.value == '   '">
                              <q-avatar
                                color="secondary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="info"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                              <q-avatar
                                color="primary"
                                size="20px"
                                style="padding: 0px 5px"
                              ></q-avatar>
                            </span>
                            <span v-else>
                              {{ col.value }}
                            </span>
                          </q-td>
                        </q-tr>
                      </template>
                    </q-table>
                  </q-card>
                </q-card-section>
              </q-card>



            </q-expansion-item>
          </q-card>
          <br />
          <br />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

const count = ref(1);

const columnsYourRateSheet = [
  {
    name: 'name',
    required: true,
    label: 'Description',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'product_id',
    align: 'center',
    label: 'Product ID',
    field: 'product_id',
    sortable: true,
  },
  { name: 'term', label: 'Full Term', field: 'term', sortable: true },
  { name: 'apr', label: 'APR', field: 'apr' },
  { name: 'fee', label: 'Merchant Fee', field: 'fee' },
  { name: 'preference', label: 'Customer Preference', field: 'preference' },
];

const rowYourRateSheet = [
  {
    name: '10y 8.99%',
    product_id: 'FR-1093',
    term: '120',
    apr: '8.99%',
    fee: '4.5%',
    preference: ' ',
  },
  {
    name: '12m No/No 48am',
    product_id: 'PD-238450',
    term: '60',
    apr: '8.99% to 12.99%',
    fee: '7.5%',
    preference: '  ',
  },
  {
    name: 'PMF Factor 2.0%',
    product_id: 'PMT-2000',
    term: '60 to 120',
    apr: '3.99% to 20.99%',
    fee: '5.25%',
    preference: '   ',
  },
];

const columnsSameAsCash = [
  {
    name: 'name',
    required: true,
    label: 'Description',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'product_id',
    align: 'center',
    label: 'Product ID',
    field: 'product_id',
    sortable: true,
  },
  { name: 'term', label: 'Full Term', field: 'term', sortable: true },
  { name: 'apr', label: 'APR', field: 'apr' },
  { name: 'fee', label: 'Merchant Fee', field: 'fee' },
  { name: 'preference', label: 'Customer Preference', field: 'preference' },
];

const rowSameAsCash = [
  {
    name: '10y 8.99%',
    product_id: 'FR-1093',
    term: '120',
    apr: '8.99%',
    fee: '4.5%',
    preference: ' ',
  },
  {
    name: '12m No/No 48am',
    product_id: 'PD-238450',
    term: '60',
    apr: '8.99% to 12.99%',
    fee: '7.5%',
    preference: ' ',
  },
  {
    name: 'PMF Factor 2.0%',
    product_id: 'PMT-2000',
    term: '60 to 120',
    apr: '3.99% to 20.99%',
    fee: '5.25%',
    preference: ' ',
  },
];

export default {
  setup() {
    return {
      columnsYourRateSheet,
      rowYourRateSheet,
      columnsSameAsCash,
      rowSameAsCash,
      active_nav: ref(true),
      nav_toggle_1: ref(false),
      nav_toggle_2: ref(false),
      nav_toggle_3: ref(false),
      toggleSwitchValue: ref(true),
    };
  },
};
</script>
