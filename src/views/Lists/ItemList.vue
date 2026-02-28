<script setup>
import FishList from './FishList.vue';
import BugList from './BugList.vue';
import FossilList from './FossilList.vue';
import GyroidList from './GyroidList.vue';
import ArtList from './ArtList.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

</script>

<template>
    <h1>{{ t('items.title') }}</h1>
    <h2>
        {{ t('items.fishes') }}
    </h2>
    <FishList></FishList>
    <h2>
        {{ t('items.bugs') }}
    </h2>
    <BugList></BugList>
    <h2>
        {{ t('items.fossils') }}
    </h2>
    <FossilList></FossilList>
    <h2>
        {{ t('items.gyroids') }}
    </h2>
    <GyroidList></GyroidList>
    <h2>
        {{ t('items.arts') }}
    </h2>
    <ArtList></ArtList>
</template>

<style scoped></style>