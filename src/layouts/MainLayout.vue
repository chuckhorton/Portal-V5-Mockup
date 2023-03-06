<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" style="color: black; height: 100px">
      <q-toolbar
        style="padding-left: 30px; padding-right: 30px; padding-top: 30px"
      >
        <q-btn
          class="hide-me-desktop"
          style="color: #486581; padding-top: 10px"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="page-header-style">
          {{ $route.meta.title || 'Acorn Finance Portal' }}
        </q-toolbar-title>


        <q-btn
          outline
          color="secondary"
          flat
          clickable
          icon-right="chevron_right"
          label="Get help"
          to="/contact"
        />

        <!--
        <q-btn
          color="secondary"
          icon-right="send"
          label="Invite a customer"
          class="hide-me-mobile"
          @click="fixed = true"
        />

        <q-btn
          color="secondary"
          icon-right="send"
          label=""
          class="hide-me-desktop"
          style="border-radius: 200px"
          @click="fixed = true"
        />
        -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered show-if-above>
      <q-img
        src="~assets/branded-material.png"
        clickable
        to="/profile"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            style="
              background-color: #59bfff;
              position: relative;
              margin-bottom: 10px;
            "
            text-color="black"
          >
            C
          </q-avatar>
            <br />
            <q-btn
                    class="text-weight-bold"
                    padding="none"
                    dense
                    flat
                    color="white"
                    label="Corey Sayers"
                    icon-right="expand_more"
                    style="min-height:16px !important; font-size: 14px !important; padding-left:0px; padding-right:0px;"
                  >
                    <q-menu

                       anchor="bottom left"

                      auto-close>
                      <q-list>
                        <q-item clickable to="/profile">
                           <q-item-section avatar>
                            <q-icon color="primary" name="person" />
                          </q-item-section>
                          <q-item-section>View Profile</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable to="/password">
                           <q-item-section avatar>
                            <q-icon color="primary" name="lock_reset" />
                          </q-item-section>
                          <q-item-section>Change Password</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable to="/" v-ripple inset>
                          <q-item-section avatar>
                            <q-icon name="logout" />
                          </q-item-section>
                          <q-item-section>Sign out</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
          <div>John's Contracting Company</div>
        </div>
      </q-img>

      <br />
      <br />

      <!-- MERCHANT NAVIGATION -->
      <div v-show="active_nav">
        <q-list>
          <p class="nav-divider">Acorn Merchant</p>
          <q-item
            clickable
            to="/merchant"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Merchant Center</q-item-section>
          </q-item>

          <q-item
            clickable
            to="/rates"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="percent" />
            </q-item-section>
            <q-item-section>Rates</q-item-section>
          </q-item>

          <q-item
            clickable
            to="/statements"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>
            <q-item-section>Statements</q-item-section>
          </q-item>

          <q-item
            clickable
            to="/payments"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="payments" />
            </q-item-section>
            <q-item-section>Payments Settings</q-item-section>
          </q-item>
        </q-list>

        <q-list>
          <p class="nav-divider">Acorn Open</p>
          <q-item
            clickable
            to="/"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Open Center</q-item-section>
          </q-item>

          <q-item
            clickable
            to="/open-apps"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="request_quote" />
            </q-item-section>
            <q-item-section>Applications</q-item-section>
          </q-item>
        </q-list>
        <q-list>
          <p class="nav-divider">Utilities</p>
          <q-expansion-item
            label="Manage Access"
            default-closed
            icon="group"
            group="nav-group"
          >
            <q-item
              clickable
              to="/users"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Manage Users</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/companies"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Manage Companies</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            label="Resources"
            default-closed
            icon="construction"
            group="nav-group"
          >
            <q-item
              clickable
              to="/lender"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Lender Comparision</q-item-section>
            </q-item>

            <q-item
              clickable
              to="/estimator"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Payment Estimator</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/marketing"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Marketing Kit</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            label="Help"
            default-closed
            icon="menu_book"
            group="nav-group"
          >
            <q-item
              clickable
              to="/help"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Getting started</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/contact"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Contact Us</q-item-section>
            </q-item>
          </q-expansion-item>
<!--
          <q-item clickable to="/open-apps" v-ripple inset>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>Sign out</q-item-section>
          </q-item>
-->
          <div style="text-align: left">
            <p
              style="
                float: left;
                font-size: 10px;
                padding-left: 20px;
                padding-top: 15px;
              "
            >
              Portal Version 5.0.0-Beta01

              <q-item-section
                clickable
                avatar
                style="float: right; padding-left: 10px"
              >
                <q-icon
                  style="color: #486581; width: 15px; height: 15px"
                  name="refresh"
                />
              </q-item-section>
            </p>
          </div>
          <div
            style="
              padding-left: 20px;
              clear: both;
              padding-top: 10px;
              padding-bottom: 20px;
            "
          >
            <img
              src="~assets/acorn-logo.png"
              style="width: 100px; height: auto"
            />
          </div>
        </q-list>
      </div>

      <!-- OPEN NAVIGATION -->
      <div v-show="!active_nav">
        <q-list>
          <p class="nav-divider">Acorn Open</p>
          <q-item
            clickable
            to="/"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Open Center</q-item-section>
          </q-item>

          <q-item
            clickable
            to="/open-apps"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="request_quote" />
            </q-item-section>
            <q-item-section>Applications</q-item-section>
          </q-item>
        </q-list>

        <q-list>
          <p class="nav-divider">Acorn Merchant <q-icon name="lock" /></p>
          <q-item
            clickable
            to="/enroll"
            v-ripple
            inset
            active-class="custom-nav-active"
          >
            <q-item-section avatar>
              <q-icon name="explore" />
            </q-item-section>
            <q-item-section>Explore Merchant</q-item-section>
          </q-item>
        </q-list>

        <q-list>
          <p class="nav-divider">Utilities</p>
          <q-expansion-item
            label="Manage Access"
            default-closed
            icon="group"
            group="nav-group"
          >
            <q-item
              clickable
              to="/users"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Manage Users</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/companies"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Manage Companies</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item
            label="Resources"
            default-closed
            icon="construction"
            group="nav-group"
          >
            <q-item
              clickable
              to="/lender"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Lender Comparision</q-item-section>
            </q-item>

            <q-item
              clickable
              to="/estimator"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Payment Estimator</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/marketing"
              v-ripple
              inset
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Marketing Kit</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            label="Help"
            default-closed
            icon="menu_book"
            group="nav-group"
          >
            <q-item
              clickable
              to="/help"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Getting started</q-item-section>
            </q-item>
            <q-item
              clickable
              to="/contact"
              v-ripple
              class="inset-subnav"
              active-class="custom-nav-active"
            >
              <q-item-section>Contact Us</q-item-section>
            </q-item>
          </q-expansion-item>
<!--
          <q-item clickable to="/open-apps" v-ripple inset>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>Sign out</q-item-section>
          </q-item>
-->

          <div style="text-align: left">
            <p
              style="
                float: left;
                font-size: 10px;
                padding-left: 20px;
                padding-top: 15px;
              "
            >
              Portal Version {{ $q.version }}

              <q-item-section
                clickable
                avatar
                style="float: right; padding-left: 10px"
              >
                <q-icon
                  style="color: #486581; width: 15px; height: 15px"
                  name="refresh"
                />
              </q-item-section>
            </p>
          </div>
          <div
            style="
              padding-left: 20px;
              clear: both;
              padding-top: 10px;
              padding-bottom: 20px;
            "
          >
            <img
              src="~assets/acorn-logo.png"
              style="width: 100px; height: auto"
            />
          </div>
        </q-list>
      </div>

      <div>
        <q-toggle
          @click="active_nav = !active_nav"
          v-model="nav_toggle"
          color="blue"
        ></q-toggle>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <template>
    <q-dialog v-model="fixed">
      <q-card style="width: 1024px; max-width: 90vw; padding-bottom: 0px">
        <!-- <div class="row" style="padding-top:0px; padding-bottom:0px; z-index: 100000 !important">
            <div class="col-12" style="text-align: center;">
              <q-btn class="float-right" flat color="primary" v-close-popup>
                <q-icon name=" close" style="color: #0a5c3d" size="1.4em" />
              </q-btn>
            </div>
          </div>-->
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
                <div class="row q-col-gutter-md justify-center">
                  <div class="col-md-7 col-xs-12" style="text-align: center">
                    <q-icon name="send" color="secondary" size="2em" />
                    <h4
                      style="
                        color: primary;
                        margin-top: 5px;
                        margin-bottom: 10px;
                      "
                    >
                      Send the invite that works best
                    </h4>
                    <p>
                      You have access to multiple loan invitations you can send
                      to your customers. If you want, you can set a default
                      option and change it later in your profile.
                    </p>
                  </div>
                </div>
              </q-card-section>

              <div class="row justify-center">
                <div class="col-md-5 col-xs-12">
                  <q-card-section>
                    <q-card flat bordered class="inivite-card cursor-pointer">
                      <span class="q-focus-helper"></span>
                      <q-card-section>
                        <div class="row justify-center">
                          <div class="col-12">
                            <div
                              class="justify-center"
                              align="center"
                              style="padding-top: 10px"
                            >
                              <q-avatar style="background-color: #e9f7d6">
                                <q-icon
                                  name=" money_off"
                                  style="color: #0a5c3d"
                                  size="1.4em"
                                />
                              </q-avatar>

                              <h6 style="margin-top: 10px; margin-bottom: 10px">
                                Acorn Open
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="row justify-center">
                          <q-list style="color: #486581" align="center">
                            <q-item>
                              <q-item-section
                                >No merchant fees – 100% free to
                                you</q-item-section
                              >
                            </q-item>
                            <q-item>
                              <q-item-section
                                >Get paid by your customer in
                                cash</q-item-section
                              >
                            </q-item>
                            <q-item>
                              <q-item-section
                                >Competitive rates and terms</q-item-section
                              >
                            </q-item>
                          </q-list>
                        </div>
                      </q-card-section>
                      <q-card-actions
                        class="justify-center"
                        vertical
                        style="padding-left: 40px; padding-right: 40px"
                      >
                        <q-btn
                          @click="$refs.stepper.goTo(2)"
                          color="secondary"
                          label="Select"
                        />
                        <q-radio
                          val="open_default"
                          v-model="invite_default"
                          label="Make default invitation"
                        />
                      </q-card-actions>
                    </q-card>
                  </q-card-section>
                </div>

                <div class="col-md-5 col-xs-12">
                  <q-card-section>
                    <q-card flat bordered class="inivite-card cursor-pointer">
                      <span class="q-focus-helper"></span>
                      <q-card-section>
                        <div class="row justify-center">
                          <div class="col-12">
                            <div
                              class="justify-center"
                              align="center"
                              style="padding-top: 10px"
                            >
                              <q-avatar color="info">
                                <q-icon
                                  name="attach_money"
                                  color="secondary"
                                  size="1.4em"
                                />
                              </q-avatar>
                              <h6 style="margin-top: 10px; margin-bottom: 10px">
                                Acorn Merchant
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="row justify-center">
                          <q-list style="color: #486581" align="center">
                            <q-item>
                              <q-item-section
                                >Fees are determined on your Rate
                                Sheet</q-item-section
                              >
                            </q-item>
                            <q-item>
                              <q-item-section
                                >Get paid directly by the lender</q-item-section
                              >
                            </q-item>
                            <q-item>
                              <q-item-section
                                >Send the rates that work best for you and your
                                customer</q-item-section
                              >
                            </q-item>
                          </q-list>
                        </div>
                      </q-card-section>
                      <q-card-actions
                        class="justify-center"
                        vertical
                        style="padding-left: 40px; padding-right: 40px"
                      >
                        <q-btn
                          @click="$refs.stepper.goTo(3)"
                          color="secondary"
                          label="Select"
                        />
                        <q-radio
                          val="merchant_default"
                          v-model="invite_default"
                          label="Make default invitation"
                        />
                      </q-card-actions>
                    </q-card>
                  </q-card-section>
                </div>
              </div>
            </q-step>

            <q-step
              :name="2"
              title="Create an ad group"
              caption="Optional"
              icon="create_new_folder"
              :done="step > 2"
            >
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12" style="text-align: center">
                    <q-avatar style="background-color: #e9f7d6">
                      <q-icon
                        name=" money_off"
                        style="color: #0a5c3d"
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
                              v-model="estimate_cost"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              v-model="phone_field_1"
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
                              v-model="estimate_cost"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              v-model="email_field_1"
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
                              v-model="email_field_1"
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
                              v-model="estimate_cost"
                              type="number"
                              prefix="$"
                              placeholder="Enter project cost (optional)"
                            />

                            <q-input
                              outlined
                              bg-color="white"
                              v-model="copy_field"
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

            <q-step :name="3" title="Ad template" icon="assignment">
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12" style="text-align: center">
                    <q-avatar color="info">
                      <q-icon
                        name="attach_money"
                        color="secondary"
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
                              v-model="text_field_2"
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
                              v-model="email_field_2"
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
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      basic: ref(false),
      fixed: ref(false),
      active: ref(true),
      invite_default: ref('open_default'),
      step: ref(1),
      tab: ref('text'),
      activeOffers: ref(null),
      options: [
        'Multi-Product Offer',
        'Spring Patio Offer',
        '3 Month No Interest Offer',
      ],
      active_nav: ref(true),
      nav_toggle: ref(false),
      estimate_cost: ref(''),
      phone_field_1: ref(''),
      phone_field_2: ref(''),
      email_field_1: ref(''),
      email_field_2: ref(''),
      copy_field: ref('acornfinance.com/apply/EWY'),
      toggleSwitchValue: ref(true),
      inviteRadioValue: ref('copy'),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
