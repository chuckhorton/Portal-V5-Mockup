<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <q-card bordered flat>
            <div class="merchant-dash-card-top">
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-card-section>
                    <q-badge
                      class="eyebrow-yellow"
                      text-color="black"
                      label="Merchant Fees Applied"
                    />
                    <h4 class="open-dashboard">
                      Send a customer an Acorn Merchant Invite
                    </h4>
                    <p
                      style="
                        color: white;
                        padding-bottom: 0px;
                        margin-bottom: 0px;
                      "
                    >
                      Send a customer an invitiation to your loan application by
                      using the link below. Invitations can be sent by email or
                      text message.
                    </p>
                  </q-card-section>
                  <q-card-section>
                    <q-card-actions>
                      <q-btn
                        class="white-btn"
                        bg-color="white"
                        label-color="primary"
                        label="Send a new invite"
                        @click="merchant_invite = true"
                      />
                    </q-card-actions>
                  </q-card-section>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="col-md-8 col-sm-12 col-xs-12">
          <q-card flat bordered class="my-card">
            <q-card-section
              class="grey-card-header"
              style="padding-bottom: 9px"
            >
              <div class="row no-wrap">
                <div class="col-8">
                  <q-btn
                    class="card-heading-btn"
                    padding="none"
                    dense
                    flat
                    color="primary"
                    label="Recent Invitations"
                    icon-right="expand_more"
                  >
                    <q-menu cover auto-close>
                      <q-list>
                        <q-item clickable>
                          <q-item-section>New Applications</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Recent Invitations</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section
                            >Available Transactions</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
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
            </q-card-section>
            <q-separator />
            <q-card-section style="padding-top: 0px">
              <div class="q-table__middle scroll">
                <q-table
                  :rows="rowsLoanActivity"
                  :columns="columnsLoanActivity"
                  row-key="name"
                  virtual-scroll
                  v-model:pagination="pagination"
                  :rows-per-page-options="[5]"
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        <span v-if="col.name == 'full_name'">
                          <q-btn
                            flat
                            dense
                            @click="toggleRightDrawer"
                            style="
                              color: #147ac6;
                              font-weight: 600;
                              text-decoration: none;
                              font-size: 14px !important;
                              font-weight: 300;
                              padding: 0px;
                              min-height: 10px !important;
                            "
                            >{{ col.value }}
                          </q-btn>
                        </span>

                        <span v-else-if="col.name == 'app_id'">
                          <q-btn
                            flat
                            dense
                            @click="toggleRightDrawer"
                            style="
                              color: #147ac6;
                              font-weight: 600;
                              text-decoration: none;
                              font-size: 14px !important;
                              font-weight: 300;
                              padding: 0px;
                              min-height: 10px !important;
                            "
                            >{{ col.value }}
                          </q-btn>
                        </span>

                        <span v-else>
                          {{ col.value }}
                        </span>
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-col-gutter-md" style="margin-top: 10px">
        <div class="col-12">
          <q-card flat bordered class="my-card">
            <q-card-section class="grey-card-header">
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="card-heading">Recent Applications</div>
                </div>

                <div class="col-auto">
                  <q-btn
                    color="primary"
                    flat
                    label="See all"
                    icon-right="arrow_forward"
                    clickable
                    to="/merchant-apps"
                    v-ripple
                  >
                  </q-btn>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pt-none">
              <div class="q-table__middle scroll">
                <q-table
                  :rows="rowRecentActivity"
                  :columns="columnsRecentActivity"
                  row-key="name"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>

  <div class="customer-summary-drawer-container">
    <q-drawer
      class="customer-summary-drawer"
      v-model="rightDrawerOpen"
      side="right"
      overlay
      bordered
    >
      <q-card flat class="my-card" style="min-height: 515px">
        <q-card-section class="grey-card-header">
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="card-heading">Customer Summary</div>
            </div>
            <div class="col">
              <q-btn class="float-right" flat color="primary">
                <q-icon
                  @click="toggleRightDrawer"
                  name=" close"
                  style="color: #0a5c3d"
                  size="1.4em"
                />
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section style="padding-top: 0px; padding-bottom: 10px">
          <q-input
            bottom-slots
            v-model="text"
            label="Search by Customer Name"
            maxlength="12"
            :dense="dense"
            style="padding-top: 10px"
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
        </q-card-section>

        <q-card-section
          style="padding-top: 0px; padding-left: 0px; padding-right: 0px"
        >
          <q-item>
            <q-item-section>
              <q-item-label>
                <span class="customer-summary-eyebrow">App ID: 8924398598234</span>
              </q-item-label>
              <q-item-label
                style="color: #147ac6; font-weight: 600; text-decoration: none"
                class="customer-summary-name"
                >Boyd Carter</q-item-label
              >
              <q-item-label lines="1" class="customer-summary-available">
                Available spend: $12,000.00</q-item-label
              >
              <q-item-label class="customer-summary-spent"
                >Amount spent: $0</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section
          style="padding-top: 0px; padding-left: 0px; padding-right: 0px"
        >
          <q-item>
            <q-item-section>
              <q-input
                outlined
                v-model="request_amount"
                type="number"
                placeholder="Payment Amount Request"
                prefix="$"
              >
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-input
                outlined
                v-model="payment_description"
                type="text"
                label="Transaction Description"
              >
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section style="text-align: right">
              <q-btn
                @click="payment_confirm = true"
                color="secondary"
                style="width: 30%"
                label="Send"
              />
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </q-drawer>
  </div>

  <template>
    <q-dialog v-model="merchant_invite">
      <q-card style="width: 1024px; max-width: 90vw; padding-bottom: 0px">
        <q-card-section class="invite-stepper no-shadow" style="">
          <q-stepper
            v-model="step"
            ref="stepper"
            style=""
            color="primary"
            animated
          >
            <q-step
              :name="1"
              title="Select campaign settings"
              icon="settings"
              :done="step > 1"
            >
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12" style="text-align: center">
                    <q-avatar style="background-color: #e9f7d6">
                      <q-icon
                        name=" attach_money"
                        style="color: #0a5c3d"
                        size="1.4em"
                      />
                    </q-avatar>
                    <h4 style="margin-top: 5px; margin-bottom: 10px">
                      Send an Acorn Merchant Invite
                    </h4>
                    <p>
                      Select how you'd like to send an Acorn Merchant Invite.
                    </p>
                  </div>
                </div>
              </q-card-section>

              <q-card-section>
                <div class="row q-gutter-y-md justify-center">
                  <div class="col-md-6 col-xs-12">
                    <div class="q-gutter-y-md">
                      <q-tabs
                        v-model="tab"
                        dense
                        class="text-grey"
                        active-color="primary"
                        indicator-color="primary"
                        align="justify"
                        narrow-indicator
                      >
                        <q-tab name="text" icon="sms" label="Text" />
                        <q-tab
                          name="email"
                          icon="outgoing_mail"
                          label="Email"
                        />
                      </q-tabs>

                      <q-separator />

                      <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="text">
                          <div class="text-h6">Share your link with a text</div>
                          <div class="q-gutter-md">
                            <p>
                              Enter your customer's phone number below, and
                              we'll send a text message to them with your
                              financing link.
                            </p>
                            <q-input
                              outlined
                              v-model="phone_field"
                              bg-color="white"
                              placeholder="Example: 555-555-5555"
                              text=""
                            />
                            <q-select
                              outlined
                              v-model="activeOffers"
                              :options="options"
                              label="Enter an offer code (optional)"
                            />
                            <q-btn
                              color="secondary"
                              label="Send a text"
                              icon-right="navigate_next"
                              @click="$refs.stepper.goTo(4)"
                            />
                          </div>
                        </q-tab-panel>

                        <q-tab-panel name="email">
                          <div class="text-h6">
                            Share your link with an email
                          </div>
                          <div class="q-gutter-md">
                            <p>
                              Enter your customer's email address below, and
                              we'll send an email to them with your financing
                              link.
                            </p>
                            <q-input
                              outlined
                              v-model="email_field"
                              bg-color="white"
                              placeholder="Example: johnsample@gmail.com"
                              text=""
                            />
                            <q-select
                              outlined
                              v-model="activeOffers"
                              :options="options"
                              label="Enter an offer code (optional)"
                            />
                            <br />
                            <q-btn
                              color="secondary"
                              label="Send an email"
                              icon-right="navigate_next"
                              @click="$refs.stepper.goTo(4)"
                            />
                          </div>
                        </q-tab-panel>
                      </q-tab-panels>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-step>
            <q-step
              :name="4"
              title="Create an ad group"
              caption="Optional"
              icon="create_new_folder"
              :done="step > 2"
            >
              <q-card-section style="">
                <div class="row q-col-gutter-md">
                  <div class="col-12" style="text-align: center">
                    <q-avatar color="white">
                      <q-icon name="send" color="secondary" size="1.4em" />
                    </q-avatar>
                    <h4 style="margin-top: 5px; margin-bottom: 10px">
                      Your Loan Application Invite is sent!
                    </h4>
                    <p>You'll be notified as soon as your customer applies.</p>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row q-gutter-y-md justify-center">
                  <div class="col-md-6 col-xs-12">
                    <div class="q-gutter-y-md">
                      <video
                        autoplay
                        muted
                        playsinline
                        style="
                          pointer-events: none;
                          margin-left: 80px;
                          width: 300px;
                          height: 300px;
                        "
                        name="media"
                      >
                        <source src="/src/assets/Rocket.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
                <div class="row q-col-gutter-md">
                  <div class="col-12" style="text-align: center">
                    <q-btn
                      style="align-self: center"
                      label="Close"
                      color="primary"
                      v-close-popup
                    />
                  </div>
                </div>
              </q-card-section>
            </q-step>
            <template v-slot:navigation>
              <q-stepper-navigation>
                <!--  <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />-->
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="payment_confirm">
      <q-card>
        <q-card-section>
          <div class="text-h6">Please confirm</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          You are requesting <b>$5,000</b> from <b>Boyd Carter</b>.
          <br />
          <br />
          Transaction Description:<br />
          <b>Consumer Project Charge</b>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="secondary" v-close-popup />
          <q-btn label="Confirm" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
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
];

const columnsLoanActivity = [
  {
    name: 'full_name',
    required: true,
    label: 'Full Name',
    align: 'left',
    field: 'full_name',
    sortable: true,
  },
  {
    name: 'app_id',
    align: 'center',
    label: 'Application ID',
    field: 'app_id',
    sortable: true,
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    sortable: true,
  },
  { name: 'amount', label: 'Amount', field: 'amount' },
  { name: 'product_id', label: 'Product ID', field: 'product_id' },
  { name: 'date', label: 'Date/Time', field: 'date' },
];

const rowsLoanActivity = [
  {
    full_name: 'Boyd Carter',
    app_id: '8924398598234',
    status: 'Approved: Accepted',
    amount: '$18,000',
    product_id: 'FR-01394',
    date: 'March 3rd, 2023',
  },
  {
    full_name: 'John Johnson',
    app_id: '3824398598203',
    status: 'Approved: Requested',
    amount: '$12,000',
    product_id: 'GH-0485',
    date: 'March 6th, 2023',
  },
  {
    full_name: 'Susan Sample',
    app_id: '893989834984',
    status: 'Approved: Requested',
    amount: '$10,000',
    product_id: 'FR-03409',
    date: 'March 6th, 2023',
  },
  {
    full_name: 'James Jenkins',
    app_id: '293489983498',
    status: 'Approved: Accepted',
    amount: '$9,000',
    product_id: 'FR-90340',
    date: 'March 4th, 2023',
  },
  {
    full_name: 'Kevin Kinney',
    app_id: '09209039209432',
    status: 'Approved: Accepted',
    amount: '$19,000',
    product_id: 'TY-23004',
    date: 'March 3rd, 2023',
  },
  {
    full_name: 'Samantha Carter',
    app_id: '23099023094',
    status: 'Approved: Requested',
    amount: '$18,000',
    product_id: 'FR-01394',
    date: 'March 3rd, 2023',
  },
  {
    full_name: 'Johnny James',
    app_id: '92302309400943',
    status: 'Approved: Accepted',
    amount: '$3,000',
    product_id: '48-020034',
    date: 'March 3rd, 2023',
  },
  {
    full_name: 'Boyd Carter',
    app_id: '8924398598234',
    status: 'Approved: Accepted',
    amount: '$18,000',
    product_id: 'FR-01394',
    date: 'March 3rd, 2023',
  },
];

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      text: ref(''),
      request_amount: ref(''),
      payment_description: ref(''),
      ph: ref(''),
      email_field: ref(''),
      phone_field: ref(''),
      dense: ref(true),
      columnsRecentActivity,
      rowRecentActivity,
      merchant_invite: ref(false),
      payment_confirm: ref(false),
      step: ref(1),
      tab: ref('text'),
      activeOffers: ref(null),
      options: [
        'Multi-Product Offer',
        'Spring Patio Offer',
        '3 Month No Interest Offer',
      ],
      columnsLoanActivity,
      rowsLoanActivity,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
