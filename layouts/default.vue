<template>
    <nav class="navbar white">
        <v-app-bar
            elevate-on-scroll
            light
            color="white"
        >

            <v-row justify="center">
                <v-col cols="6">
                    <v-row justify="space-between">
                        <v-col cols="2">
                            <v-btn text>Home</v-btn>
                        </v-col>

                        <v-col cols="2">
                            <v-btn text>Home</v-btn>
                        </v-col>

                        <v-col cols="2">
                            <v-btn text>Home</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: false
    })
};
</script>