<template>
    <v-row>
        <v-col cols="12" lg="5" class="d-flex align-lg-center">
            <v-card flat>
                <v-img contain
                       src="@/assets/images/image_6.jpg"
                       max-height="600"></v-img>
            </v-card>
        </v-col>
        <v-col cols="12" lg="7" class="d-flex align-lg-center">
            <v-card flat>
                <v-card-title class="font-weight-bold">Несколько слов обо мне</v-card-title>
                <v-card-subtitle>и моей деятельности</v-card-subtitle>
                <v-card-text>
                    <p>Привет! Я &mdash; <strong>Анастасия Малашкевич</strong>,
                        солистка <a href="https://bolshoibelarus.by/rus/" class="nav-link" style="text-decoration: none"><strong>Большого театра Беларуси.</strong></a></p>
                    <p>Всю мою сознательную жизнь я пою и развиваюсь в разных вокальных направлениях.</p>
                    <p>В копилке образования:</p>
                    <ul class="v-list--dense">
                    <li>музыкальное училище;</li>
                    <li>Академия музыки по классу оперного искусства у <br class="d-block d-lg-none">профессора <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D1%81,_%D0%9B%D1%8E%D0%B4%D0%BC%D0%B8%D0%BB%D0%B0_%D0%AF%D0%BA%D0%BE%D0%B2%D0%BB%D0%B5%D0%B2%D0%BD%D0%B0" style="text-decoration: none"><strong>Колос Л.Я.</strong></a>;</li>
                    <li>международная стажировка у <a href="https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%BB%D0%B8%D1%81-%D0%93%D0%B0%D1%80%D0%B0,_%D0%A2%D0%B5%D1%80%D0%B5%D0%B7%D0%B0" style="text-decoration: none"><strong>Терезы Жилис-Гара</strong></a>;</li>
                    <li>cтажировка в <a href="https://bolshoibelarus.by/rus/" class="nav-link" style="text-decoration: none"><strong>Большом театре Беларуси.</strong></a></li>
                    </ul>
                    <br>
                    <p>
                        Как педагог вела студию вокала <strong>«Живой звук»</strong> (защитила педагогическую категорию, написав образовательную программу и методическое пособие для вокалистов).
                        <br>Была вокальным тренером на проекте <strong>ОНТ «Академия Талантов»</strong>
                    </p>
                    <p>
                        Была на "Голосе" в Москве, не повернулись. Поехала в Киев. В команде Тины дошла до первого финального прямого эфира, пройдя слепые прослушивания, баттлы и нокауты. Множество раз была финалисткой отбора на конкурс <strong>Eurovision</strong> от Беларуси.
                    </p>
                    <p>
                        В классическом вокале получила премию в международном рождественском конкурсе оперных певцов при <a href="https://bolshoibelarus.by/rus/" class="nav-link" style="text-decoration: none"><strong>Большом театре Беларуси.</strong></a>.
                    </p>
                    <p>
                        Кроме певческой деятельности, я занимаюсь преподаванием вокала.
                        Я могу помочь тебе в классическом или современном вокале, как дипломированный и опытный профессионал в данном вопросе, развить основы и показать возможности дыхания, диапазона и вокальной техники.
                        Кроме прочего, я помогаю с репертуаром и его подготовкой, а также с подготовкой к поступлению в специализированные учебные заведения или какому-либо певческому конкрусу!
                    </p>
                    <p>
                        Если ты хочешь научиться правильной постановке голоса, дыхания, различным техникам вокала, развить в себе силу голоса и артистичность &mdash; переходи по этой <router-link style="text-decoration: none" to="/contact"><strong>ссылке</strong></router-link> и свяжись со мной любым удобным способом.
                        Только не забудь указать свое имя!
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
