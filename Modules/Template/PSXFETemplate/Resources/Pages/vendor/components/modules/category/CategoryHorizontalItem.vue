<template>
   <div class="text-center cursor-pointer w-full overflow-hidden bg-gray-50 dark:bg-feSecondary-800 rounded-x sm:rounded-xl lg:rounded-lg">

        <div class="h-44 relative">
            <img class="w-full h-full object-cover" v-lazy="{ src: $page.props.thumb2xUrl + '/' + category.defaultPhoto.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }" alt="">
            <div class='flex justify-center absolute -bottom-7 w-full'>
                <div class="w-14 h-14 bg-gray-50 p-3 rounded-full border-2 border-white dark:bg-feSecondary-800">


                    <img alt="Placeholder" class="object-contain"
                    v-lazy=" { src: $page.props.thumb2xUrl + '/' + category.defaultIcon.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }"
                    >
                </div>
            </div>
        </div>
        <div class="h-20">
            <ps-label class="pt-9 lg:text-base sm:text-sm text-base font-medium" textColor=""> {{ category.catName.length > 20 ? category.catName.slice(0,20)+'...' : category.catName }}  </ps-label>
        </div>
    </div>
</template>

<script lang="ts">
import { useCategoryStoreState } from "@templateCore/store/modules/category/CategoryStore";
import { defineComponent } from "vue";
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import Category from "@templateCore/object/Category";

export default defineComponent ({
    name : "CategoryHorizontalItem",
    props : {
        category : { type : Category } ,
    },
    components : {
       PsLabel
    },
    setup() {
        // Inject Provider
        const categoryStore = useCategoryStoreState('cat');

        return {
            categoryStore
        }

    }
});
</script>
