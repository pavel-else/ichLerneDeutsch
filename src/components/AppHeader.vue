<template>
    <v-app>
        <v-toolbar class="primary" app dark>
            <v-toolbar-title v-text="'Ich lerne Deutsch'"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- <v-btn v-for="(item, i) in menuItems" :key="i" flat :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn> -->
                <v-btn flat v-for="(item, index) in menuItems" :key="index" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>

<script>
export default {
    computed: {
        menuItems() {
            return [
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
