<template>
  <q-page class="q-pa-md main-body">
    <div class="main-container">
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card flat bordered class="my-card full-height">
            <q-card-section class="q-pt-none">
              <div class="full-height row justify-center items-center ">
                <div class="col-md-8 col-xs-12">
                  <div class="q-gutter-y-md" style="padding-top:30px;">

                      
                    <h4>Update your profile</h4>
                    <q-separator />

                    <q-input outlined v-model="f_name" label="First Name" />
                    <q-input outlined v-model="l_name" label="Last Name" />
                    <q-input outlined v-model="email" label="Email Address" />
                    <q-input outlined v-model="phone" label="Phone Number" />
                    <q-input outlined v-model="company" label="Company" />

                    <q-btn color="secondary" label="Save" />

        
                    
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
import { ref } from 'vue'

export default {
  setup () {
    return {
      f_name: ref('Corey'),
      l_name: ref('Sayers'),
      email: ref('corey@johnscontracting.com'),
      phone: ref('302-345-6460'),
      company: ref('Johns Contracting Company')
    }
  }
}
</script>
