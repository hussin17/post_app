<template>
<div class="">
    <div v-if="status == PsConst.paidItemProgressStatus" >
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-blue-500 text-feTextLight   text-center leading-4 rounded-sm">
            {{ $t("fe_paidad_item__progress") }}
        </div>
    </ps-label-caption>
    </div>

    <div v-else-if="status == PsConst.paidItemCompletedStatus">
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-green-500 text-feTextLight   text-center leading-4 rounded-sm">
            {{ $t("fe_paidad_item__completed") }}
        </div>
    </ps-label-caption>
    </div>

    <div v-else-if="status == PsConst.paidItemNotYetStartStatus">
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-gray-500 text-feTextLight   text-center leading-4 rounded-sm">
            {{ $t("fe_paidad_item__not_reached") }}
        </div>
    </ps-label-caption>
    </div>

    <div v-else-if="status == PsConst.paidItemNotAvailable">
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-gray-500 text-feTextLight   text-center leading-4 rounded-sm">
            {{ $t("paidad_item__no_action") }}
        </div>
    </ps-label-caption>
    </div>

    <div v-else-if="status == PsConst.paidItemWaitingForApproval">
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-yellow-500 text-feTextLight   text-center rounded-sm">
            {{ $t("fe_paidad_item__wait_approval") }}
        </div>
    </ps-label-caption>
    </div>

    <div v-else-if="status == PsConst.paidItemRejected">
    <ps-label-caption>
        <div class="absolute py-2 px-4 left-2 top-2 bg-red-600 text-feTextLight   text-center leading-4 rounded-sm">
            {{ $t("fe_paidad_item__wait_rejected") }}
        </div>
    </ps-label-caption>
    </div>
</div>
</template>

<script lang="ts">

import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import PsConst from '@templateCore/object/constant/ps_constants';

export default {
    name : "PaidAdItemPaidStatus",
    components : {
        PsLabelCaption

    },
    props : {
        status : { type : String } ,
        onClick : Function
    },
    setup(){
        return {
            PsConst
        }
    }
}
</script>
