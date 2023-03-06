<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-md-4 col-xs-12">
          <q-card bordered flat>
            <div class="open-dash-card-top-3">
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-card-section>
                    <q-badge
                      class="eyebrow-yellow"
                      text-color="black"
                      label="No Merchant Fees"
                    />
                    <h4 class="open-dashboard">
                      Send a customer an Acorn Open Invite
                    </h4>
                    <p
                      style="
                        color: white;
                        padding-bottom: 0px;
                        margin-bottom: 0px;
                      "
                    >
                      Send a customer an invitiation to your loan application by
                      using the link below. Invitations can be sent by email,
                      text or copy and pasted.
                    </p>
                  </q-card-section>
                  <q-card-section>
                    <q-card-actions>
                      <q-btn
                        class="white-btn"
                        bg-color="white"
                        label-color="primary"
                        label="Send a new invite"
                        @click="open_invite = true"
                      />
                    </q-card-actions>
                  </q-card-section>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12">
          <q-card bordered flat class="my-card open-training-card">
            <div class="open-dash-card-top"></div>
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-card-section>
                  <p>Learn more about how Acorn Open works</p>
                </q-card-section>
                <q-card-section style="padding-top: 0px">
                  <q-card-actions>
                    <q-btn outline color="secondary" label="Start training" />
                  </q-card-actions>
                </q-card-section>
              </div>
            </div>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12">
          <q-card bordered flat class="my-card open-training-card">
            <div class="open-dash-card-top-2"></div>
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-card-section>
                  <p>Get paid by lenders with Acorn Merchant</p>
                </q-card-section>
                <q-card-section style="padding-top: 0px">
                  <q-card-actions>
                    <q-btn outline color="secondary" label="Learn more" />
                  </q-card-actions>
                </q-card-section>
              </div>
            </div>
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
                    color="secondary"
                    flat
                    label="See all"
                    icon-right="arrow_forward"
                    clickable
                    to="/open-apps"
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
                >
                <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                      >
                        <span v-if="col.name == 'app_id'">
                          <q-btn
                            flat
                            dense
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
    </div>
  </q-page>

  <template>
    <q-dialog v-model="open_invite">
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
                    <q-avatar color="info">
                      <q-icon
                        name="money_off"
                        color="secondary"
                        size="1.4em"
                      />
                    </q-avatar>
                    <h4 style="margin-top: 5px; margin-bottom: 10px">
                      Send an Acorn Open Invite
                    </h4>
                    <p>Select how you'd like to send an Acorn Open Invite.</p>
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
                        <q-tab name="copy" icon="content_copy" label="Copy" />
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
                              v-model="number"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              bg-color="white"
                              placeholder="Example: 555-555-5555"
                              text=""
                            >
                              <template v-slot:append>
                                <q-icon name="" color="accent" />
                              </template>
                            </q-input>

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
                              v-model="number"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              bg-color="white"
                              placeholder="Example: johnsample@gmail.com"
                              text=""
                            >
                              <template v-slot:append>
                                <q-icon name="" color="accent" />
                              </template>
                            </q-input>
                            <br />
                            <q-btn
                              color="secondary"
                              label="Send an email"
                              icon-right="navigate_next"
                              @click="$refs.stepper.goTo(4)"
                            />
                          </div>
                        </q-tab-panel>

                        <q-tab-panel name="copy">
                          <div class="text-h6">Copy and paste your link</div>
                          <div class="q-gutter-md">
                            <p>
                              Copy and paste the link below to send to one of
                              you customers.
                            </p>

                            <q-input
                              outlined
                              v-model="number"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              bg-color="white"
                              v-model="text"
                              placeholder="acornfinance.com/apply/EWY"
                              text="acornfinance.com/apply/EWY"
                            >
                            </q-input>
                            <q-btn
                              color="secondary"
                              label="Copy to Clipboard"
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
  </template>
</template>

<script>
import { ref } from 'vue';

const count = ref(0);

const columnsRecentActivity = [
 {
    name: 'app_id',
    required: true,
    label: 'App ID',
    align: 'left',
    field: 'app_id',
    sortable: true,
  },
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
    name: 'offered',
    label: 'Offered',
    field: 'offered',
    sortable: true,
  },
  { name: 'status', label: 'Status', field: 'status' },
  { name: 'process_status', label: 'Process Status', field: 'process_status' },
  { name: 'offers_expire', label: 'Offered Expire', field: 'offers_expire' },
  { name: 'days_to_select', label: 'Days to Select', field: 'days_to_select' },
  { name: 'days_to_fund', label: 'Days to Fund', field: 'days_to_fund' },
  { name: 'cob', label: 'COB', field: 'cob' },
  { name: 'loan_amount', label: 'Loan Amount', field: 'loan_amount' },
  { name: 'phone_number', label: 'Phone Number', field: 'phone_number' },
  { name: 'email', label: 'Email', field: 'email' },
  { name: 'dealer_id', label: 'Dealer ID', field: 'dealer_id', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rowRecentActivity = [
  {
    app_id: '892389',
    first_name: 'Boyd',
    last_name: 'Carter',
    offered: '1',
    status: 'Selected',
    offers_expire: 'April 3rd, 2023',
    days_to_select: '2',
    days_to_fund: '4',
    cob: 'No',
    loan_amount: '$10,000',
    phone_number: '555-555-5555',
    email: 'boydcarter@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '902340',
    first_name: 'John',
    last_name: 'Sample',
    offered: '0',
    status: 'Funded',
    offers_expire: 'April 4th, 2023',
    days_to_select: '4',
    days_to_fund: '3',
    cob: 'No',
    loan_amount: '$5,000',
    phone_number: '333-333-3333',
    email: 'johnsample@gmail.com',
    dealer_id: 'ABF8939',
  },
    {
    app_id: '129484',
    first_name: 'Susan',
    last_name: 'Simple',
    offered: '12',
    status: 'Funded',
    offers_expire: 'April 15th, 2023',
    days_to_select: '5',
    days_to_fund: '6',
    cob: 'No',
    loan_amount: '$7,000',
    phone_number: '555-555-5555',
    email: 'SusanSimple@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '034958',
    first_name: 'Timothy',
    last_name: 'Taylor',
    offered: '4',
    status: 'Funded',
    offers_expire: 'April 18rd, 2023',
    days_to_select: '8',
    days_to_fund: '9',
    cob: 'No',
    loan_amount: '$3,000',
    phone_number: '555-555-5555',
    email: 'timtaylor@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '892389',
    first_name: 'Boyd',
    last_name: 'Carter',
    offered: '1',
    status: 'Selected',
    offers_expire: 'April 3rd, 2023',
    days_to_select: '2',
    days_to_fund: '4',
    cob: 'No',
    loan_amount: '$10,000',
    phone_number: '555-555-5555',
    email: 'boydcarter@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '902340',
    first_name: 'John',
    last_name: 'Sample',
    offered: '0',
    status: 'Funded',
    offers_expire: 'April 4th, 2023',
    days_to_select: '4',
    days_to_fund: '3',
    cob: 'No',
    loan_amount: '$5,000',
    phone_number: '333-333-3333',
    email: 'johnsample@gmail.com',
    dealer_id: 'ABF8939',
  },
    {
    app_id: '129484',
    first_name: 'Susan',
    last_name: 'Simple',
    offered: '12',
    status: 'Funded',
    offers_expire: 'April 15th, 2023',
    days_to_select: '5',
    days_to_fund: '6',
    cob: 'No',
    loan_amount: '$7,000',
    phone_number: '555-555-5555',
    email: 'SusanSimple@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '034958',
    first_name: 'Timothy',
    last_name: 'Taylor',
    offered: '4',
    status: 'Funded',
    offers_expire: 'April 18rd, 2023',
    days_to_select: '8',
    days_to_fund: '9',
    cob: 'No',
    loan_amount: '$3,000',
    phone_number: '555-555-5555',
    email: 'timtaylor@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '892389',
    first_name: 'Boyd',
    last_name: 'Carter',
    offered: '1',
    status: 'Selected',
    offers_expire: 'April 3rd, 2023',
    days_to_select: '2',
    days_to_fund: '4',
    cob: 'No',
    loan_amount: '$10,000',
    phone_number: '555-555-5555',
    email: 'boydcarter@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '902340',
    first_name: 'John',
    last_name: 'Sample',
    offered: '0',
    status: 'Funded',
    offers_expire: 'April 4th, 2023',
    days_to_select: '4',
    days_to_fund: '3',
    cob: 'No',
    loan_amount: '$5,000',
    phone_number: '333-333-3333',
    email: 'johnsample@gmail.com',
    dealer_id: 'ABF8939',
  },
    {
    app_id: '129484',
    first_name: 'Susan',
    last_name: 'Simple',
    offered: '12',
    status: 'Funded',
    offers_expire: 'April 15th, 2023',
    days_to_select: '5',
    days_to_fund: '6',
    cob: 'No',
    loan_amount: '$7,000',
    phone_number: '555-555-5555',
    email: 'SusanSimple@gmail.com',
    dealer_id: 'ABF8939',
  },
  {
    app_id: '034958',
    first_name: 'Timothy',
    last_name: 'Taylor',
    offered: '4',
    status: 'Funded',
    offers_expire: 'April 18rd, 2023',
    days_to_select: '8',
    days_to_fund: '9',
    cob: 'No',
    loan_amount: '$3,000',
    phone_number: '555-555-5555',
    email: 'timtaylor@gmail.com',
    dealer_id: 'ABF8939',
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
    full_name: 'Boyd Carter',
    app_id: '8924398598234',
    status: 'Approved: Accepted',
    amount: '$18,000',
    product_id: 'FR-01394',
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
  {
    full_name: 'Boyd Carter',
    app_id: '8924398598234',
    status: 'Approved: Accepted',
    amount: '$18,000',
    product_id: 'FR-01394',
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
  {
    full_name: 'Boyd Carter',
    app_id: '8924398598234',
    status: 'Approved: Accepted',
    amount: '$18,000',
    product_id: 'FR-01394',
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
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true),
      inviteRadioValue: ref('copy'),
      open_invite: ref(false),
      step: ref(1),
      tab: ref('text'),
      activeOffers: ref(null),
      columnsRecentActivity,
      rowRecentActivity,
      columnsLoanActivity,
      rowsLoanActivity,
    };
  },
};
</script>
