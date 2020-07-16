<template>
    <v-row class="fill-height">
        <v-col cols="12" lg="7" class="fill-lg-height d-lg-flex justify-lg-center align-lg-center ma-lg-0 pt-lg-0 pb-lg-0">
            <v-card :loading="loading" class="elevation-5 mx-auto" width="95%">
                <v-card-title>Напиши мне</v-card-title>
                <v-card-subtitle>Заполни поля ниже</v-card-subtitle>
                <validation-observer ref="observer" v-slot="{ invalid, passes }">
                    <v-form @submit.prevent="passes( submit )">
                        <v-row class="pa-4">
                            <v-col cols="12" lg="6">
                                <validation-provider name="Имя" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                            :disabled="loading"
                                            v-model="form.name"
                                            color="primary"
                                            autocomplete="off"
                                            type="text"
                                            :error-messages="errors"
                                            placeholder="Напиши свое имя"
                                    ></v-text-field>
                                </validation-provider>

                            </v-col>
                            <v-col cols="12" lg="6">
                                <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
                                <v-text-field
                                        :disabled="loading"
                                        v-model="form.email"
                                        color="primary"
                                        autocomplete="off"
                                        type="email"
                                        :error-messages="errors"
                                        placeholder="Напиши свой e-mail"
                                ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="12">
                                <validation-provider name="Сообщение" rules="required|max:400" v-slot="{ errors }">
                                <v-textarea
                                        :disabled="loading"
                                        v-model="form.message"
                                        color="primary"
                                        :counter="400"
                                        :error-messages="errors"
                                        placeholder="Напиши здесь то, что хочешь узнать"></v-textarea>
                                </validation-provider>
                            </v-col>
                        </v-row>
                        <v-card-actions class="justify-end">
                            <v-btn :disabled="loading" type="submit" color="primary">
                                Отправить&nbsp;&nbsp;
                                <v-icon>mdi-send</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </validation-observer>
            </v-card>
        </v-col>
        <v-col cols="12" lg="5" class="fill-lg-height d-lg-flex justify-lg-center align-lg-center ma-lg-0 pt-lg-0 pb-lg-0">
            <v-card class="mx-auto" flat width="95%">
                <v-card-title>Также ты можешь связаться со мной иначе</v-card-title>
                <v-card-subtitle>Мои контакты в соцсетях</v-card-subtitle>
                <v-row class="pa-4">
                    <v-col cols="3" lg="3">
                        <v-btn href="https://teleg.run/Anastacia_Ma" color="primary" fab>
                            <v-icon>mdi-telegram</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="3" lg="3">
                        <v-btn href="https://vk.com/malashkevich_singer" color="primary" fab>
                            <v-icon>mdi-vk</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="3" lg="3">
                        <v-btn href="https://instagram.com/anastacia_malashkevich" color="primary" fab>
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="3" lg="3">
                        <v-btn href="https://www.facebook.com/gold.singing.lady" color="primary" fab>
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                loading: false,
                form: {
                    name: null,
                    email: null,
                    message: null
                }
            }
        },
        methods: {
            submit() {
                this.loading = true;
                this.$httpService.post('api/feedback', this.$fdService.fill(this.form))
                .then((response) => {
                    this.$store.commit("alert", {status: true, message: response.data.success, type: "success"});
                    this.$fdService.reset(this.form);
                    this.$refs.observer.reset()
                })
                .finally(() => {
                    setTimeout(() => this.loading = false);
                })
            }
        }
    }
</script>

<style scoped>

</style>
