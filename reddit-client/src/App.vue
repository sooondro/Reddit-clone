<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/subreddits">Reddit Clone</a>

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!isLoggedIn">
              <a class="button is-danger" @click="login()">
                Login with Google
              </a>
            </p>
            <p class="control loggedIn" v-if="isLoggedIn">
              <section class="avatar mr-3">
                <figcaption>{{ user.name }}</figcaption>
                <figure class="image is-32x32">
                  <img class="is-rounded" :src="user.image">
                </figure>
              </section>
              <a class="button is-primary" @click="logout()">
                <span>Log out</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
};
</script>

<style lang="scss">
.main {
  margin-top: 2em;
}

.loggedIn{
  display: flex;
  flex-direction: row;
}

.avatar {
  display: flex;
  flex-direction: row;
}
</style>
