<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item, index) in menuItems" :key="index">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon" left flat></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="primary" app dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'Ich lerne Deutsch'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="(item, index) in menuItems" :key="index" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        }
    },
    computed: {
        isAuth() {
            return this.$store.getters.isAuth
        },
        menuItems() {
            return this.isAuth 
            ? [
                    {
                        icon: 'visibility',
                        title: 'Читать',
                        route: '/books'
                    },
                    {
                        icon: 'extension',
                        title: 'Учить слова',
                        route: '/words'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Мой кабинет',
                        route: '/profile'
                    },
                    {
                        icon: 'exit_to_app',
                        title: 'Выйти',
                        route: '/logout'
                    },
                ]
            : [
                    {
                        icon: 'input',
                        title: 'Login',
                        route: '/signin'
                    },
                    {
                        icon: 'lock_open',
                        title: 'Register',
                        route: '/signup'
                    },
                ]

        }
    }
}
</script>
