<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="error"
                  type="warning"
                >
                  {{ error }}
                </v-alert>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="e-mail" v-model="email" type="email" required></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" v-model="password" label="Пароль" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signUp()">Regitration</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
          email: null,
          password: null,
        }
    },
    methods: {
      signUp() {
        this.$store.dispatch('SIGNUP', { email: this.email, password: this.password })
      }
    },
    computed: {
      error() {
        return this.$store.getters.getError
      }
    }
}
</script>