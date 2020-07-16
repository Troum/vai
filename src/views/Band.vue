<template>
    <v-row class="fill-height">
        <v-col cols="12" lg="5" class="d-lg-flex align-lg-center">
            <v-card flat class="pa-3">
                <v-img contain
                       src="@/assets/images/image_1.jpg"
                       max-height="600"></v-img>
            </v-card>
        </v-col>
        <v-col cols="12" lg="7" class="d-lg-flex align-lg-center">
            <v-card flat>
                <v-card-title class="font-weight-bold">О проекте "MALASHKEVICH BAND"</v-card-title>
                <v-card-subtitle>и о том, что мы делаем</v-card-subtitle>
                <v-card-text>
                    <p>Проект <strong>"MALASHKEVICH BAND"</strong> изначально создавался для того, чтобы объединить между собой различных талантливых музыкантов с целью профессионального и качественного исполнения
                        музыкальных произведений различных авторов: как зарубежных, так и отечественных.
                    </p>

                    <ul>
                        Состав нашей группы:
                        <li>Я, <strong>Анастасия Малашкевич</strong> &mdash; солистка <a href="https://bolshoibelarus.by/rus/" class="nav-link" style="text-decoration: none"><strong>Большого театра Беларуси;</strong></a></li>
                        <li><strong>Алесь Мышкевич</strong> &mdash; басист групп "Крамбамбуля", "Ляпис-98", "DREZDEN";</li>
                        <li><strong>Александр Ивашкевич</strong> &mdash; гитарист группы "BEZ BILETA";</li>
                        <li><strong>Антон Орлов</strong> &mdash; барабанщик многих известных белорусских проектов;</li>
                        <li><strong>Женя Кирдун</strong> &mdash; клавиши.</li>
                    </ul>
                    <p>
                        Живое и профессиональное исполнение кавер-версий различных зарубежных и не только исполнителей вкупе с яркой и насыщенной программой выступления
                        дарит всем поклонникам и слушателям нашего коллектива незабываемые эмоции и впечатления.
                    </p>
                    <p>
                        Мы выступаем в топовых заведениях города Минска: <a href="https://druzya.by/" style="text-decoration: none"><strong>"Друзья"</strong></a>, <a href="https://bar-doodahking.relax.by/" style="text-decoration: none"><strong>"Dudah King"</strong></a>, <a href="http://barbaris.by/coyote/index.html" style="text-decoration: none"><strong>"Coyote Bar"</strong></a> и других. Однако, если ты хочешь, чтобы на твоем Дне Рождения, корпоративе твоей компании,
                        твоей свадьбе или же просто закрытой вечеринке "только для своих" звучала действительно качественная музыка, исполненная профессионалами своего дела, если ты хочешь
                        получить заряд эмоций и позитива на долгое время &mdash; переходи по этой <router-link style="text-decoration: none" to="/contact"><strong>ссылке</strong></router-link> и свяжись с нами любым удобным для тебя способом, чтобы забронировать наше выступление!
                    </p>
                    <p>А <router-link to="/videos" style="text-decoration: none"><strong>здесь</strong></router-link> ты можешь увидеть некоторые наши выступления</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Band"
    }
</script>

<style scoped>

</style>
