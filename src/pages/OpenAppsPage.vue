<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">

          <q-card flat bordered class="my-card">
            <q-card-section class="grey-card-header">
              <div class="row items-center no-wrap">
                <div class="col-8">
                  <q-btn
                    color="secondary"
                    outline
                    label="Filter"
                    icon-right="filter_list"
                    clickable
                    @click="filter_modal = true"
                    v-ripple
                  />
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
                  virtual-scroll
                  v-model:pagination="pagination"
                  :rows-per-page-options="[24]"
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
                  <span class="customer-summary-eyebrow"
                    >App ID: 8924398598234</span
                  >
                </q-item-label>
                <q-item-label
                  style="
                    color: #147ac6;
                    font-weight: 600;
                    text-decoration: none;
                  "
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

    <q-dialog v-model="filter_modal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Filter Applications</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div
            class="
              q-splitter
              no-wrap
              q-splitter--vertical
              row
              q-splitter--workable
              search-splitter
            "
            style=""
          >
            <div
              class="q-splitter__panel q-splitter__before"
              style="width: 25%"
            >
              <div
                class="
                  q-tabs
                  row
                  no-wrap
                  items-center
                  q-tabs--not-scrollable
                  q-tabs--vertical
                  q-tabs__arrows--inside
                  q-tabs--dense
                  text-left
                "
                role="tablist"
              >
                <!---->
                <div
                  class="
                    q-tabs__content
                    row
                    no-wrap
                    items-center
                    self-stretch
                    hide-scrollbar
                    relative-position
                    q-tabs__content--align-justify
                  "
                >
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--active
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="0"
                    role="tab"
                    aria-selected="true"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Latest</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style=""
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Name</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style=""
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Email</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Between</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Since</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style=""
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">App Id</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Dealer Id</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Company</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Parent</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style=""
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Status</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style=""
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">UTM Content</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style="display: none"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Review Status</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style="display: none"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">Funding Status</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                  <div
                    class="
                      q-tab
                      relative-position
                      self-stretch
                      flex flex-center
                      text-center
                      q-tab--inactive
                      q-focusable q-hoverable
                      cursor-pointer
                    "
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    style="display: none"
                  >
                    <div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="
                        q-tab__content
                        self-stretch
                        flex-center
                        relative-position
                        q-anchor--skip
                        non-selectable
                        column
                      "
                    >
                      <div class="q-tab__label">All</div>
                    </div>
                    <div class="q-tab__indicator absolute-right"></div>
                  </div>
                </div>
                <i
                  class="
                    q-icon
                    notranslate
                    material-icons
                    q-tabs__arrow q-tabs__arrow--left
                    absolute
                    q-tab__icon
                  "
                  aria-hidden="true"
                  role="presentation"
                  >keyboard_arrow_up</i
                ><i
                  class="
                    q-icon
                    notranslate
                    material-icons
                    q-tabs__arrow q-tabs__arrow--right
                    absolute
                    q-tab__icon
                    q-tabs__arrow--faded
                  "
                  aria-hidden="true"
                  role="presentation"
                  >keyboard_arrow_down</i
                >
              </div>
            </div>
            <div class="q-splitter__separator">
              <div class="q-splitter__separator-area absolute-full"></div>
            </div>
            <div class="q-splitter__panel q-splitter__after col">
              <div class="q-tab-panels q-panel-parent">
                <div
                  class="q-panel scroll"
                  role="tabpanel"
                  style="--q-transition-duration: 300ms"
                >
                  <div class="q-tab-panel" role="tabpanel">
                    <div class="text-h4 q-mb-md tab-panel-title">Latest 25</div>
                    <div class="q-gutter-sm">
                      <div
                        class="
                          q-radio
                          cursor-pointer
                          no-outline
                          row
                          inline
                          no-wrap
                          items-center
                        "
                        tabindex="0"
                        role="radio"
                        aria-label="25"
                        aria-checked="false"
                      >
                        <div
                          class="
                            q-radio__inner
                            relative-position
                            q-radio__inner--falsy
                          "
                          aria-hidden="true"
                        >
                          <input
                            class="hidden q-radio__native q-ma-none q-pa-none"
                            type="radio"
                          /><svg
                            class="q-radio__bg absolute non-selectable"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
                            ></path>
                            <path
                              class="q-radio__check"
                              d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
                            ></path>
                          </svg>
                        </div>
                        <span class="no-outline" tabindex="-1"></span>
                        <div class="q-radio__label q-anchor--skip">25</div>
                      </div>
                      <div
                        class="
                          q-radio
                          cursor-pointer
                          no-outline
                          row
                          inline
                          no-wrap
                          items-center
                        "
                        tabindex="0"
                        role="radio"
                        aria-label="50"
                        aria-checked="false"
                      >
                        <div
                          class="
                            q-radio__inner
                            relative-position
                            q-radio__inner--falsy
                          "
                          aria-hidden="true"
                        >
                          <input
                            class="hidden q-radio__native q-ma-none q-pa-none"
                            type="radio"
                          /><svg
                            class="q-radio__bg absolute non-selectable"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
                            ></path>
                            <path
                              class="q-radio__check"
                              d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
                            ></path>
                          </svg>
                        </div>
                        <span class="no-outline" tabindex="-1"></span>
                        <div class="q-radio__label q-anchor--skip">50</div>
                      </div>
                      <div
                        class="
                          q-radio
                          cursor-pointer
                          no-outline
                          row
                          inline
                          no-wrap
                          items-center
                        "
                        tabindex="0"
                        role="radio"
                        aria-label="100"
                        aria-checked="false"
                      >
                        <div
                          class="
                            q-radio__inner
                            relative-position
                            q-radio__inner--falsy
                          "
                          aria-hidden="true"
                        >
                          <input
                            class="hidden q-radio__native q-ma-none q-pa-none"
                            type="radio"
                          /><svg
                            class="q-radio__bg absolute non-selectable"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
                            ></path>
                            <path
                              class="q-radio__check"
                              d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
                            ></path>
                          </svg>
                        </div>
                        <span class="no-outline" tabindex="-1"></span>
                        <div class="q-radio__label q-anchor--skip">100</div>
                      </div>
                      <div
                        class="
                          q-radio
                          cursor-pointer
                          no-outline
                          row
                          inline
                          no-wrap
                          items-center
                        "
                        tabindex="0"
                        role="radio"
                        aria-label="200"
                        aria-checked="false"
                      >
                        <div
                          class="
                            q-radio__inner
                            relative-position
                            q-radio__inner--falsy
                          "
                          aria-hidden="true"
                        >
                          <input
                            class="hidden q-radio__native q-ma-none q-pa-none"
                            type="radio"
                          /><svg
                            class="q-radio__bg absolute non-selectable"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
                            ></path>
                            <path
                              class="q-radio__check"
                              d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
                            ></path>
                          </svg>
                        </div>
                        <span class="no-outline" tabindex="-1"></span>
                        <div class="q-radio__label q-anchor--skip">200</div>
                      </div>
                    </div>
                    <br /><button
                      class="
                        q-btn q-btn-item
                        non-selectable
                        no-outline
                        q-btn--standard q-btn--rectangle
                        bg-secondary
                        text-white
                        q-btn--actionable
                        q-focusable q-hoverable
                        search-button
                      "
                      tabindex="0"
                      type="button"
                    >
                      <span class="q-focus-helper"></span
                      ><span
                        class="
                          q-btn__content
                          text-center
                          col
                          items-center
                          q-anchor--skip
                          justify-center
                          row
                        "
                        ><i
                          class="q-icon on-left notranslate material-icons"
                          aria-hidden="true"
                          role="img"
                          >search</i
                        ><span class="block">Search</span></span
                      ></button
                    ><button
                      class="
                        q-btn q-btn-item
                        non-selectable
                        no-outline
                        q-btn--flat q-btn--rectangle q-btn--actionable
                        q-focusable q-hoverable
                        close-button
                      "
                      tabindex="0"
                      type="button"
                      title="Close Search"
                    >
                      <span class="q-focus-helper"></span
                      ><span
                        class="
                          q-btn__content
                          text-center
                          col
                          items-center
                          q-anchor--skip
                          justify-center
                          row
                        "
                        ><i
                          class="q-icon notranslate material-icons"
                          aria-hidden="true"
                          role="img"
                          >close</i
                        ></span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
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
  {
    name: 'dealer_id',
    label: 'Dealer ID',
    field: 'dealer_id',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
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

export default {
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true),
      columnsRecentActivity,
      rowRecentActivity,
      filter_modal: ref('false'),
    };
  },
};
</script>
