<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card">
            <q-card-section class="grey-card-header">
              <div class="card-heading">Download your Statements
              </div>
           
            </q-card-section>
            <q-card-section class="q-pt-none">

            
              <div class="">

                <q-table
                  :rows="rowYourRateSheet"
                  :columns="columnsYourRateSheet"
                  row-key="name"
                  :rows-per-page-options="[25]"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                            <q-td v-for="col in props.cols" :key="col.name" :props="props">
                                  {{col.value}}
                            </q-td>
                            <q-td align="right">
                              <q-btn flat round color="primary" icon="more_vert">
                                <q-menu cover auto-close>
                                  <q-list>
                                    <q-item clickable>
                                      <q-item-section>Open Detail</q-item-section>
                                    </q-item>
                                    <q-item clickable>
                                      <q-item-section>Export CSV</q-item-section>
                                    </q-item>
                                    <q-item clickable>
                                      <q-item-section>Export PDF</q-item-section>
                                    </q-item>
                                    <q-item clickable>
                                      <q-item-section>Export EXC</q-item-section>
                                    </q-item>
                                  </q-list>
                                </q-menu>
                              </q-btn>
                            </q-td>
                          </q-tr>
                    </template>
                  </q-table>

                  <br />
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

const count = ref(1);

const columnsYourRateSheet = [
  {
    name: 'date',
    required: true,
    label: 'Statement Date',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'apps_submitted', align: 'center', label: 'Apps Submitted', field: 'apps_submitted', sortable: true },
  { name: 'apps_approved', label: 'Apps Approved', field: 'apps_approved', sortable: true },
  { name: 'credit_limit_approved', label: 'Total Credit Limit Approved', field: 'credit_limit_approved' },
  { name: 'net_purchases', label: 'Net Purchases', field: 'net_purchases' },
  { name: 'merchant_fees_paid', label: 'Fees Paid', field: 'merchant_fees_paid' },
   { name: 'paid_to_you', label: 'What You Made', field: 'paid_to_you' },
]

const rowYourRateSheet = [
  {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },  {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  },
    {
    name: '05/22',
    apps_submitted: '67',
    apps_approved: '54',
    credit_limit_approved: '$837,000.00',
    net_purchases: '$560,000.00',
    merchant_fees_paid: '-$23,000.00',
    paid_to_you: '$35,495.000',
  }
];



export default {
  setup() {


    return {
      columnsYourRateSheet,
      rowYourRateSheet,
    };
  },
};

</script>
