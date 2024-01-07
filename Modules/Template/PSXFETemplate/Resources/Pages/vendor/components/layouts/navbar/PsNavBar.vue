<template>

    <nav class="flex flex-col fixed w-full h-16 z-40 bg-feBackground dark:bg-backgroundDark shadow"
        :class="topOfPage ? 'mt-10' : 'mt-0'" >
        <div class="lg:w-large xl:w-feLarge mx-4 md:mx-6 lg:mx-auto flex items-center justify-between mt-3 ">
            <div class="md:flex gap-6 hidden">
                <div class="h-10 cursor-pointer">
                    <img
                    v-lazy=" { src: $page.props.thumb3xUrl + '/'+appInfoStore.appInfo.data?.frontendConfigSetting?.frontendLogo?.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }"
                    @click="gotToHome" alt="Navbar logo" width="40px" height="40px" class=" rounded:xl w-auto  h-10 object-cover "/>
                </div>
                <ps-route-link :to="{name: 'dashboard' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                    {{ $t("ps_nav_bar__home") }}
                </ps-route-link>
                <ps-route-link :to="{name: 'fe_category.index' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                    {{ $t("category_list__title") }}
                </ps-route-link>
                <ps-route-link :to="{name: 'fe_blog' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                    {{ $t("ps_nav_bar__blogs") }}
                </ps-route-link>
                <ps-route-link :to="{name: 'fe_contact_us' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                    {{ $t("ps_nav_bar__contact_us") }}
                </ps-route-link>
            </div>
            <div class="block md:hidden cursor-pointer" @click="toggleMobileMenu">
                <ps-icon class="cursor-pointer" textColor="text-feSecondary-800 dark:text-white" name="menu" h="24" w="24" />
            </div>
            <div class="flex gap-6 items-center">
                <!-- <ps-route-link :to="{name: 'fe_item_list' }">
                    <ps-icon class="cursor-pointer" textColor="text-feSecondary-800 dark:text-white hover:text-fePrimary-500" name="search" h="24" w="24" viewBox="0 0 23 23"/>
                </ps-route-link> -->
                <div v-if="$page.props.authUser != null" class="flex gap-6 justify-between items-center">
                    <ps-route-link :to="{name: 'fe_chat_list' }">
                        <div class="relative">
                            <ps-icon class="cursor-pointer" textColor="text-feSecondary-800 dark:text-white hover:text-fePrimary-500" name="message" h="24" w="24" viewBox="0 0 23 23"/>
                            <div class="me-6 p-0.5 text-xs font-semibold rounded-full bg-fePrimary-500 text-feTextLight absolute -top-2 -right-8"  v-if="parseInt(userunreadmsgStore.unreadCount.data?.buyerUnreadCount) + parseInt(userunreadmsgStore.unreadCount.data?.sellerUnreadCount)">{{ parseInt(userunreadmsgStore.unreadCount.data?.buyerUnreadCount) + parseInt(userunreadmsgStore.unreadCount.data?.sellerUnreadCount) ? parseInt(userunreadmsgStore.unreadCount.data?.buyerUnreadCount) + parseInt(userunreadmsgStore.unreadCount.data?.sellerUnreadCount) : '' }}</div>
                        </div>
                    </ps-route-link>
                    <ps-route-link :to="{name: 'fe_notification_list' }">
                        <div class="relative">
                            <ps-icon class="cursor-pointer" textColor="text-feSecondary-800 dark:text-white hover:text-fePrimary-500" name="bell-outline" h="24" w="24" viewBox="0 -2 18 23"/>
                            <div class="me-6 p-0.5 text-xs font-semibold rounded-full bg-fePrimary-500 text-feTextLight absolute -top-2 -right-8" v-if="userunreadmsgStore.unreadCount.data?.notiUnreadCount">{{ userunreadmsgStore.unreadCount.data?.notiUnreadCount }}</div>
                        </div>
                    </ps-route-link>
                    <!-- for profile dropdown -->
                    <ps-dropdown horizontalAlign="center" class='ms-3 sm:ms-4 lg:ms-6 xxl:ms-8 w-full' h="h-auto" boxPositioning="mt-[16px] translate-x-16 lg:translate-x-20 xl:translate-x-24">
                        <template #select>
                            <div class="flex items-center">
                                <div class="h-8 w-8 rounded-full">
                                    <img v-if="$page.props.authUser?.user_cover_photo" class="object-cover h-8 w-8 rounded-full cursor-pointer"
                                    v-lazy=" { src: $page.props.uploadUrl + '/' + $page.props.authUser?.user_cover_photo, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_profile.png' }"
                                    :alt="$t('core__be_profile')">
                                    <img v-else class="object-cover h-8 w-8 rounded-full cursor-pointer" :src="$page.props.uploadUrl + '/default_profile.png' "
                                    :alt="$t('core__be_profile')">
                                </div>
                                <ps-icon name="downArrow"></ps-icon>
                            </div>
                        </template>
                        <template #list>
                            <div class="rounded-md shadow-xs w-[280px]">
                                <div class="z-30 ">
                                    <ps-route-link :to="{name: 'fe_profile' }"
                                        textSize="text-sm"
                                        class="m-2 mt-4 flex border p-2 rounded hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer justify-center">
                                        <ps-label textColor="text-gray-500">{{$t('core__view_profile')}}</ps-label>
                                    </ps-route-link>

                                    <hr class="mt-2 mb-2 mx-2">

                                    <ps-route-link  :to="{name: 'fe_favourite_items' }"
                                        textSize="text-sm"
                                        class="w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center">
                                        <ps-icon name="heartOutline" class="ms-2" />
                                        <ps-label class="ms-2">{{$t('core__fe_favourites')}}</ps-label>
                                    </ps-route-link>

                                    <button class="w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center" hover="" focus="" colors="" @click='openUserSetting'>
                                        <ps-icon class="ms-2" name="setting" />
                                        <ps-label class="ms-2" textColor="">{{ $t("profile__user_setting") }}</ps-label>
                                    </button>

                                    <hr class="mt-2 mb-2 mx-2"/>
                                    <ps-route-link v-if="$page.props.canAccessAdminPanel" :to="{name: 'admin.index' }"
                                        textSize="text-sm"
                                        class="w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center">
                                        <ps-icon name="refresh"  class="ms-2"/>
                                        <ps-label class="ms-2">{{$t('core__fe_switch_to_admin')}}</ps-label>
                                    </ps-route-link>
                                    <button @click="clickLogout" class="w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center ">
                                        <ps-icon name="signOut" class="ms-2 " textColor="text-red-500"/>
                                        <ps-label class="ms-2" textColor="text-red-500">{{$t('core__be_logout')}}</ps-label>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </ps-dropdown>
                    <!-- end profile -->
                    <!-- <ps-route-link :to="{name: 'fe_profile' }">
                        <img alt="Placeholder" class="cursor-pointer rounded-full bg-transparent w-10 h-10 flex items-center justify-center object-cover" width='50px' height='50px'
                            v-lazy=" { src: $page.props.thumb1xUrl + '/' + $page.props.authUser?.user_cover_photo, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_profile.png' }">
                    </ps-route-link> -->
                </div>
                <ps-label v-else @click="loginClicked" class='font-medium text-sm dark:border-fePrimaryDark-accent px-4 py-2 cursor-pointer' textColor="text-fePrimary-500" >
                    {{ $t("ps_nav_bar__login") }}
                </ps-label>
                <ps-route-link :to="{name: $page.props.authUser != null ? 'fe_item_entry' : 'login' }">
                    <ps-button padding="lg:px-4 lg:py-2 p-2">
                        <ps-icon name="plus-circle" class="me-0 lg:me-2" h="24" w="24"/>
                        <span class="hidden lg:inline">{{ $t("ps_nav_bar__submit_ad") }}</span>
                    </ps-button>
                </ps-route-link>
            </div>
        </div>
        <transition >
            <div v-if="activeMobileMenu" class="border border-b-2 text-fePrimary-500 dark:text-textdark-500 h-auto mt-3 bg-feBackground dark:bg-feBackgroundDark pb-1">
                <div  class="flex flex-col p-5 gap-6" >
                    <div class="h-10">
                        <img
                        v-lazy=" { src: $page.props.thumb1xUrl + '/' + $page.props.backendLogo.img_path, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }"
                        @click="gotToHome" alt="Navbar logo" width="40px" height="40px" class=" rounded:xl w-auto  h-10 object-cover "/>
                    </div>
                    <ps-route-link :to="{name: 'dashboard' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                        {{ $t("ps_nav_bar__home") }}
                    </ps-route-link>
                    <ps-route-link :to="{name: 'fe_category.index' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                        {{ $t("category_list__title") }}
                    </ps-route-link>
                    <ps-route-link :to="{name: 'fe_blog' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                        {{ $t("ps_nav_bar__blogs") }}
                    </ps-route-link>
                    <ps-route-link :to="{name: 'fe_contact_us' }" textSize="text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer" class="px-4 py-2">
                        {{ $t("ps_nav_bar__contact_us") }}
                    </ps-route-link>
                </div>
            </div>
        </transition>

        <ps-confirm-dialog ref="ps_confirm_dialog" />
        <user-setting-modal ref="user_setting_modal" />
    </nav>
</template>

<script>
// import PsUtils from '@templateCore/utils/PsUtils';

import { defineComponent, ref, onMounted,defineAsyncComponent } from "vue";
import { useUserProviderState } from '@templateCore/store/modules/user/UserProvider';
import { PsValueStore } from '@templateCore/store/modules/core/PsValueStore';
import firebaseApp from 'firebase/app';
import "firebase/auth"

// import Velocity from "velocity-animate";
//import $ from "cash-dom";
import { useUserUnReadMessageStore } from "@templateCore/store/modules/chat/UserUnreadMessageStore";
import UserUnReadMessageParameterHolder from '@templateCore/object/holder/UserUnReadMessageParameterHolder';

import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsDropdown from '@template1/vendor/components/core/dropdown/PsDropdown.vue';
import PsLine from "@template1/vendor/components/core/line/PsLine.vue";
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsLabel from "@template1/vendor/components/core/label/PsLabel.vue";
import PsButton from "@template1/vendor/components/core/buttons/PsButton.vue";
import { Inertia } from "@inertiajs/inertia";
import PsConst from '@templateCore/object/constant/ps_constants';
import PsConfirmDialog from '@template1/vendor/components/core/dialog/PsConfirmDialog.vue';
import PsUtils from '@templateCore/utils/PsUtils';
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore'

import { trans } from 'laravel-vue-i18n';

const UserSettingModal = defineAsyncComponent(() => import('@template1/vendor/components/modules/user/UserSettingModal.vue'));

export default defineComponent ({
    components : {
        PsIcon,
        PsDropdown,
        PsLine,
        PsRouteLink,
        PsLabel,
        PsButton,
        PsRouteLink,
        PsConfirmDialog,
        UserSettingModal,
    },
    props : {
        topOfPage : {
            type: Boolean,
            default : false
        },

    },
    setup(props) {

        const ps_confirm_dialog = ref();
        const activeMobileMenu = ref(false);
        const userProvider = useUserProviderState();
        const userProfile = ref();
        const userunreadmsgStore = useUserUnReadMessageStore();
        const userUnreadHolder = new UserUnReadMessageParameterHolder();

        const appInfoStore = usePsAppInfoStoreState();

        const user_setting_modal = ref();

        let psValueStore = PsValueStore();

        const loginUserId = psValueStore.getLoginUserId();

        userUnreadHolder.userId = loginUserId;


        // if (psValueStore.isUserLoggedIn()) {
        //     loadUser()

        // }
        async function loadUser(){
            await userProvider.getUser(loginUserId);
            userProfile.value = userProvider.user.data.userProfilePhoto;

        }
        async function loadMessage(){
            await userunreadmsgStore.postUserUnreadMessageCount(userUnreadHolder);
        }
        loadMessage();
        onMounted( async () =>{

            await loadUser;
            await loadMessage;
        })

        function userNameClicked() {
            PsValueStore.psValueStore.loadData();
            psValueStore= PsValueStore.psValueStore;
        }

        function gotToHome() {
            Inertia.get(route('dashboard'));
        }

        function toggleMobileMenu( bol = true) {
            if(bol){
                activeMobileMenu.value = !activeMobileMenu.value;
            }
		}

        function enter(el, done) {
			// Velocity(
			// 	el,
			// 	"slideDown",
			// 	{
			// 	duration: 300
			// 	},
			// 	{
			// 	complete: done
			// 	}
			// );
        }

		function leave(el, done) {
			// Velocity(
			// 	el,
			// 	"slideUp",
			// 	{
			// 	duration: 300
			// 	},
			// 	{
			// 	complete: done
			// 	}
			// );
        }

        function clickLogout() {
            // psValueStore.logout();
            ps_confirm_dialog.value.openModal(
                trans('core__be_logout'),
                trans('logout_dialog_msg'),
                trans('chat__confirm'),
                trans('chat__cancel')
                ,
                () => {
                    firebaseApp.auth().signOut();
                    Inertia.post(route('logout'));
                },
                () => {
                    PsUtils.log('cancel');
                }
            );
            // Inertia.get(route('dashboard'));
        }
        function registerClicked() {

            if(activeMobileMenu.value) {
                activeMobileMenu.value = false;
            }

            Inertia.get(route('login'));
        }
        function loginClicked() {

            if(activeMobileMenu.value) {
                activeMobileMenu.value = false;
            }
            Inertia.get(route('login'));
        }

        //light / dark mode
        const isDarkMode = ref(true);
        function toggleDarkMode() {

            if(localStorage.isDarkMode != null && localStorage.isDarkMode == 'true') {
                localStorage.isDarkMode = 'false';
                isDarkMode.value = false;
            }else {
                localStorage.isDarkMode = 'true';
                isDarkMode.value = true;
            }
            loadIsDarkMode();
        }

        loadIsDarkMode();
        function loadIsDarkMode() {

            if (localStorage.isDarkMode != null && localStorage.isDarkMode == 'true') {
                document.documentElement.classList.add('dark')
                isDarkMode.value = true;
            } else {
                document.documentElement.classList.remove('dark')
                isDarkMode.value = false;
            }

        }
        function openUserSetting(){
            user_setting_modal.value.openModal();
        }


        return {
            // check,
            toggleDarkMode,
            userunreadmsgStore,
            userProfile,
            isDarkMode,
            activeMobileMenu,
            psValueStore,
            userProvider,
            gotToHome,
            enter,
            leave,
            toggleMobileMenu,
            clickLogout,
            loginClicked,
            userNameClicked,
            registerClicked,
            ps_confirm_dialog,
            appInfoStore,
            user_setting_modal,
            openUserSetting
            // memoryUsage
        }

    }
});
</script>
