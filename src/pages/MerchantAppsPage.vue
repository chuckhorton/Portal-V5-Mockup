<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <q-btn
          color="primary"
          flat
          label="Go back"
          icon="arrow_back"
          clickable
          to="/merchant"
          v-ripple
        >
        </q-btn>
        <br /><br />

        <div class="col-12">
          <q-card flat bordered class="my-card">
            <q-card-section class="grey-card-header">
              <div class="row items-center no-wrap">
                <div class="col-8">
                  <div class="card-heading">All Merchant Applications</div>
                </div>

                <div class="col-4">
                  <q-input
                    v-model="ph"
                    label="Search"
                    maxlength="12"
                    :dense="dense"
                    style="margin-top: -10px; padding-bottom: 0px"
                  >
                    <template v-slot:prepend>
                      <q-icon name="search" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        v-if="text !== ''"
                        name="close"
                        @click="text = ''"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </div>
              </div>

              <!--
           <q-item clickable to="/merchant-apps" v-ripple inset active-class="custom-nav-active">
                <q-item-section avatar>
                  <q-icon name="request_quote" />
                </q-item-section>
                <q-item-section>Applications</q-item-section>
              </q-item>
              -->
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pt-none">
              <div class="q-table__middle scroll">
                <q-table
                  :rows="rowRecentActivity"
                  :columns="columnsRecentActivity"
                  row-key="name"
                  :rows-per-page-options="[25]"
                />
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

const count = ref(0);

const columnsRecentActivity = [
  {
    name: 'first_name',
    required: true,
    label: 'First Name',
    align: 'left',
    field: 'first_name',
    sortable: true,
  },
  {
    name: 'last_name',
    align: 'center',
    label: 'Last Name',
    field: 'last_name',
    sortable: true,
  },
  {
    name: 'description',
    label: 'Transaction Description',
    field: 'description',
    sortable: true,
  },
  { name: 'amount', label: 'Amount', field: 'amount' },
  { name: 'status', label: 'Status', field: 'status' },
  { name: 'date', label: 'Date/Time', field: 'date' },
  {
    name: 'sumbitted',
    label: 'Sumbitted by',
    field: 'sumbitted',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rowRecentActivity = [
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'John',
    last_name: 'Jacobs',
    description: 'Payment Request',
    amount: '$3,500',
    status: 'Pending',
    date: 'March 2nd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,0000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Angela',
    last_name: 'James',
    description: 'Payment Request',
    amount: '$4,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
  {
    first_name: 'Boyd',
    last_name: 'Carter',
    description: 'Payment Request',
    amount: '$1,000',
    status: 'Pending',
    date: 'March 3rd, 2023',
    sumbitted: 'Chuck Blankenship',
  },
];

export default {
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true),
      columnsRecentActivity,
      rowRecentActivity,
    };
  },
};
</script>
