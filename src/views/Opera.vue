<template>
    <v-row>
        <v-col cols="12" lg="5" class="d-lg-flex align-lg-center justify-lg-center">
            <v-card flat class="pa-4">
                <v-img contain
                       src="@/assets/images/image_3.jpg"
                       max-width="600"
                       max-height="600"></v-img>
            </v-card>
        </v-col>
        <v-col cols="12" lg="7" class="fill-lg-height d-lg-flex align-lg-center">
            <v-card flat>
                <v-card-title class="font-weight-bold">О том, почему я связала свою жизнь <br class="d-block d-lg-none"> с оперой</v-card-title>
                <v-card-subtitle>и к чему это привело</v-card-subtitle>
                <v-card-text>
                    <p>С самого первого момента, когда я решила заняться музыкой, я представляла себя именно оперной певицей.</p>
                    <p>Мне нравилось думать о том, как я исполняю арию Соломеи, или же перевоплощаюсь в принцессу Турандот, пленявшую своей красотой и губившую многих принцов и царей. Или же вот я &mdash; царская невеста, без любви вынужденная стать женою царя Ивана Грозного и умирающая от отравы завистливой подруги.</p>
                    <p>Все эти мечты через кропотливый труд, годы изучения вокала и артистического искусства стали былью. Теперь я являюьс солисткой <a href="https://bolshoibelarus.by/rus/" class="nav-link" style="text-decoration: none"><strong>Большого театра Беларуси</strong></a> и большую часть моей жизни занимает именно опера.</p>
                    <p>Это поистине невероятное искусство, позволяющее силой и страстью голоса показать историю и образ в спектакле при звучании завораживающей музыки оркестра, что переносит зрителя куда-то, где протолюдины и цари, аферисты и герои, влюбленные и враги, ревнивцы и предатели поюст свои истории, живут и умирают прямо на глазах
                        переживающего бурю эмоций зрителя! Посетите театр! Это магия!</p>
                    <p>А <router-link to="/videos" style="text-decoration: none"><strong>здесь</strong></router-link> можно увидеть и окунуться лишь в крохотную толику того, что вы можете пережить во время театральной постановки.</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Opera"
    }
</script>

<style scoped>

</style>
