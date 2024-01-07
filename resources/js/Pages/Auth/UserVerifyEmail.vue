<template>
    <Head :title="$t('core__be_email_verification_title')" />
    <div :class="isDarkMode ? 'dark' : ''">
        <div class="mb-6 bg-background dark:bg-backgroundDark flex flex-row  min-h-screen items-center justify-center">
            <div class="h-auto  sm:mt-32 lg:mt-36 mt-28 flex flex-row w-98 lg:w-202 rounded-md overflow-hidden shadow-md ">
                <div class="hidden w-100  h-auto bg-secondary-900  lg:flex flex-col items-center justify-center">
                    <div class="w-65 h-50">
                        <welcome-image />
                        <!-- <img  src="/images/assets/welcome_image.png" width="44" height="48" class="w-44 h-48 object-cover"/> -->
                    </div>
                    <ps-label class="text-lg font-semibold mt-6 mb-2" textColor="text-white">
                        {{ $t('login_title_best_deal') }}
                    </ps-label>
                    <ps-label class="text-base font-normal text-center mb-2 mx-10" textColor="text-secondary-200">
                        {{ $t('login_description_best_deal') }}
                    </ps-label>

                    <div class="flex flex-row text-white  dark:text-secondary-900  rtl:space-x-reverse space-x-4">
                        <ps-icon name="facebookCircle" />
                        <ps-icon name="instagramCircle" />
                        <ps-icon name="twitter" />
                        <!-- <ps-icon textColor="text-fePrimary-500 dark:text-primaryDark-white" class="" name="apple-icon"
                            h="24" w="24" /> -->
                        <ps-icon name="pinterest" />
                        <ps-icon name="linkedIn" />
                    </div>
                </div>
                <div class="w-full lg:w-100 bg-background dark:bg-secondary-800 px-4 sm:px-10 pb-10">
                    <!-- <img v-if="$page.props.backendLogo" :src="$page.props.uploadUrl + '/' + $page.props.backendLogo.img_path" width="50" height="50" class="m-auto my-2.5"/> -->

                    <div class="flex  justify-center">
                        <ps-label class="mt-6 mb-6 text-2xl font-senibold justify-center">{{ $t('core__be_email_verification_title') }}</ps-label>
                    </div>
                    <ps-label class=" mb-6 text-sm" textColor="text-secondary-500 ">{{
                            $t('core__be_user_email_verification_title_description') }}</ps-label>

                    <div>
                        <div class="mb-4">
                            <ps-label class="mb-2 text-sm" textColor="text-secondary-800 dark:text-feSecondary-200">{{ $t('core__be_verify_code') }}</ps-label>
                            <ps-input type="text" v-on:keyup.enter="clicked" v-model:value="code"
                                class="placeholder-secondary-800 dark:placeholder-secondary-500"
                                theme="text-feSecondary-500 bg-background dark:bg-secondary-800"
                                defaultBorder="border border-secondary-200 dark:border-feSecondary-400 focus:outline-none focus:ring-1 focus:ring-primary-500"
                                :placeholder="$t('core__be_verify_code_placeholder')" autofocus />
                            <!-- <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.email
                            }}</ps-label-caption> -->
                        </div>

                        <div class="block mt-4 ">
                            <span
                            class="text-sm cursor-pointer text-fePrimary-500 border-b border-fePrimary-500"
                            @click="resentClicked">
                                {{ $t('core__be_verify_resent') }}
                            </span>
                        </div>

                        <div class="block mt-6 lg:mt-56">
                            <ps-button class="w-full mb-2"  @click="clicked">
                                <ps-loading v-if="authStore.loading.value"
                                    theme="border-2 border-t-2 border-text-8 border-t-primary-500 me-1"
                                    loadingSize="h-5 w-5" />
                                {{ $t('core__be_verify_code_verify') }}
                            </ps-button>
                        </div>

                        <div class="block mt-6 mb-2 lg:mb-6">
                            <ps-secondary-button 
                            colors="bg-background dark:bg-secondary-800 text-secondary-800 dark:text-white"
                            @click="loginClicked" class="w-full">
                                {{ $t('core__be_verify_cancel') }}
                            </ps-secondary-button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
    <ps-loading-dialog ref="ps_loading_dialog"  :isClickOut='false'/>
    <ps-success-dialog ref="ps_success_dialog" />
    <ps-error-dialog ref="ps_error_dialog" />
</template>

<script lang="ts">
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsLabelTitle from '@template1/vendor/components/core/label/PsLabelTitle.vue';
import PsLabelCaption2 from '@template1/vendor/components/core/label/PsLabelCaption2.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';

import PsSecondaryButton from '@template1/vendor/components/core/buttons/PsSecondaryButton.vue';
import PsInput from '@template1/vendor/components/core/input/PsInput.vue';
import PsLoadingDialog from '@template1/vendor/components/core/dialogs/PsLoadingDialog.vue';
import PsSuccessDialog from '@template1/vendor/components/core/dialogs/PsSuccessDialog.vue';
import PsErrorDialog from '@template1/vendor/components/core/dialogs/PsErrorDialog.vue';

import { ref, computed} from 'vue';
import { useStore } from 'vuex'
import { trans } from 'laravel-vue-i18n';

import { Head, Link,useForm } from '@inertiajs/inertia-vue3';
import PsLabelHeader3 from "@/Components/Core/Label/PsLabelHeader3.vue";
import PsCard from "@/Components/Core/Card/PsCard.vue";
// Params Holders
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import PsLoading from "@/Components/Core/Loading/PsLoading.vue";
import WelcomeImage from "@/Components/Svgs/WelcomeImage.vue";
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt, faEdit, faStore, faStoreSlash, faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faTrashAlt, faEdit, faStore, faStoreSlash, faEye)

//Modules
import PsStatus from '@templateCore/api/common/PsStatus';

import PsConst from '@templateCore/object/constant/ps_constants';
// import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import { useAuthStore } from '../../store/AuthStore';
import { Inertia } from '@inertiajs/inertia';

// Params Holders
import UserEmailVerifyParameterHolder from '@templateCore/object/holder/UserEmailVerifyParameterHolder';

export default {
    class: "UserVerifyEmail",
    components : {
        PsLabel,
        PsLabelTitle,
        PsButton,
        PsInput,
        PsLoadingDialog,
        PsSuccessDialog,
        PsErrorDialog,
        PsLabelCaption,
        PsIcon,
        PsLabelHeader3,
        PsCard,
        Head,
        Link,
        PsLabelCaption2,
        PsLoading,
        WelcomeImage,
        PsSecondaryButton
    },
    layout: PsFrontendLayout,
    props: ['email','password','user_id','flag','error_validation','authUser'],
    setup(props) {
        
        // Inject Provider
        const authStore = useAuthStore();
        const holder = new UserEmailVerifyParameterHolder();
        const ps_loading_dialog = ref();
        const ps_success_dialog = ref();
        const ps_error_dialog = ref();
        // const psValueStore = PsValueStore();
        // const loginUserId = psValueStore.getLoginUserId();
        const code = ref();

        if(props.authUser != null){
            Inertia.get(route('dashboard'))
        }

        const store = useStore();
        const isDarkMode = computed(() => store.getters.isDarkMode);
        const dir = computed(() => store.getters.dir);

        async function clicked() {
            if(props.flag == 'error'){
                ps_error_dialog.value.openModal(trans('ps_error_dialog__error'), props.error_validation,trans('core__be_btn_ok'),()=>{});
            }else{
                holder.userId = props.user_id;
                holder.code = code.value;
                holder.email = '';
                

                ps_loading_dialog.value.openModal();
                // forgot password
                const returnData = await authStore.postUserEmailVerify(holder);
            
                ps_loading_dialog.value.closeModal(); 
                if(returnData.status == PsStatus.SUCCESS) {  
                    ps_success_dialog.value.openModal(trans('core__be_user_email_verify_success'), trans('core__be_user_email_verify_success_message'),trans('core__be_user_email_veriy_continue'),()=>{
                        login();
                    }); 
                } else {
                    ps_error_dialog.value.openModal(trans('ps_error_dialog__error'), returnData.message,trans('core__be_btn_ok'),()=>{});
                }
            }
            
        }

        async function login(){
            let form = useForm({
                email: "",
                password: "",
                deviceToken: '',
                headerToken: '',
                loginMethod: '',
            });

            form.loginMethod = 'normal';
            form.email = props.email;
            form.password = props.password;

            form.deviceToken = localStorage.deviceToken;
            form.headerToken = localStorage.headerToken;
            form.loginMethod = 'normal';

            const status = await authStore.signInWithEmailAndPassword(form.email, form.email);
            if (status) {
                form
                    .transform(data => ({
                        ...data,
                    }))
                    .post(route('login'), {
                        onFinish: () => form.reset('password'),
                    })
            }
        }

        async function resentClicked(){
            const map = {};
            map['user_email'] = props.email;
            

            ps_loading_dialog.value.openModal();
            // forgot password
            const returnData = await authStore.postResendCode(map);
        
            ps_loading_dialog.value.closeModal(); 
            if(returnData.status == PsStatus.SUCCESS) {  
                ps_success_dialog.value.openModal(trans('ps_success_dialog__success'), returnData.data.message,trans('core__be_btn_ok'),()=>{
                    
                }); 
            } else {
                ps_error_dialog.value.openModal(trans('ps_error_dialog__error'), returnData.message,trans('core__be_btn_ok'),()=>{});
            }
        }

        function loginClicked() {
            // Redirect
            Inertia.get(route('login'))
            // authStore.navigateUserLoginTo("login", router, route.query.redirect, route.query, route.params);
        }
        return{
            authStore,
            code,
            clicked,
            ps_error_dialog,
            ps_success_dialog,
            ps_loading_dialog,
            resentClicked,
            loginClicked,
            isDarkMode,
            dir
        }
    }
}
</script>
