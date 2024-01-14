<template>
    <Head :title="$t('core__create_blog')" />
    <ps-layout>

        <!-- breadcrumb start -->
        <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
        <!-- breadcrumb end -->

        <ps-card class="w-full h-auto">
            <div class="rounded-xl ">
                <!-- card header start -->
                <div class="bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl">
                    <ps-label-header-6 textColor="text-secondary-800 dark:text-secondary-100">
                        {{ $t('blog__be_blog_info') }}
                    </ps-label-header-6>
                </div>
                <!-- card header end -->

                <!-- card body start -->
                <div class="px-4 pt-6 dark:bg-backgroundDark">
                    <form @submit.prevent="handleSubmit">
                        <div class="grid w-full gap-6 sm:w-1/2">
                            <div>
                                <ps-label class="text-base">{{ $t('blog_photo_label') }}</ps-label>
                                <ps-label-title-3>{{ $t('core__be_recommended_size_400_200') }}</ps-label-title-3>
                                <ps-image-upload uploadType="image" v-model:imageFile="form.cover" />
                                <ps-label-caption textColor="text-red-500 " class="block mt-2">
                                    {{ errors.cover }}
                                </ps-label-caption>
                            </div>

                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'name' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }} <span
                                        v-if="coreField.mandatory == 1"
                                        class="font-medium text-red-800 ms-1">*</span></ps-label>
                                <ps-input ref="name" type="text" v-model:value="form.name"
                                    :placeholder="$t(coreField.placeholder)"
                                    @keyup="coreField.mandatory == 1 ? validateEmptyInput('name', form.name) : ''"
                                    @blur="coreField.mandatory == 1 ? validateEmptyInput('name', form.name) : ''" />
                                <ps-label-caption v-if="coreField.mandatory == 1" textColor="text-red-500 "
                                    class="block mt-2">{{ errors.name }}</ps-label-caption>
                            </div>

                            <!-- Link Type -->
                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'link_type' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}
                                    <span v-if="coreField.mandatory == 1" class="font-medium text-red-800 ms-1">*</span>
                                </ps-label>
                                <select v-model="link_type" @change="onSelectChange(link_type)"
                                    style="width: 100%; border:1px solid #DDD">
                                    <option value="inner">داخلي</option>
                                    <option value="outer">خارجي</option>
                                </select>
                            </div>

                            <!-- Link -->
                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'link' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index" v-if="form.link_type == 'outer'">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}
                                    <span v-if="coreField.mandatory == 1" class="font-medium text-red-800 ms-1">*</span>
                                </ps-label>
                                <ps-input ref="link" type="text" v-model:value="form.link"
                                    :placeholder="$t(coreField.placeholder)" />
                                <ps-label-caption v-if="coreField.mandatory == 1" textColor="text-red-500 "
                                    class="block mt-2">{{ errors.link }}</ps-label-caption>
                            </div>

                            <!-- banner type -->
                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'type' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}
                                    <span v-if="coreField.mandatory == 1" class="font-medium text-red-800 ms-1">*</span>
                                </ps-label>
                                <select v-model="type" @change="onTypeChange(type)"
                                    style="width: 100%; border:1px solid #DDD">
                                    <option value="">اختر...</option>
                                    <option value="main">رئيسي</option>
                                    <option value="category">قسم</option>
                                </select>
                            </div>

                            <!-- category_id -->
                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'category_id' && coreField.enable === 1 && coreField.is_delete === 0)"
                                v-if="form.type == 'category'" :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}
                                    <span v-if="coreField.mandatory == 1" class="font-medium text-red-800 ms-1">*</span>
                                </ps-label>
                                <select required style="width: 100%" v-model="catID" @change="onCategoryChange(catID)">
                                    <option value="">اختر...</option>
                                    <option v-for="category in categories" :value="category.id">{{ category.name }}
                                    </option>
                                </select>
                            </div>

                            <!-- subCategory_id -->
                            <div id="subcatID"
                                v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'subCategory_id' && coreField.enable === 1 && coreField.is_delete === 0)"
                                v-if="newSubCatData.length > 0" :key="index" class="d-none">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}
                                    <span v-if="coreField.mandatory == 1" class="font-medium text-red-800 ms-1">*</span>
                                </ps-label>
                                <select required style="width: 100%" v-model="subCatID"
                                    @change="onSubCategoryChange(subCatID)">
                                    <option value="">اختر...</option>
                                    <option v-for="category in newSubCatData" :value="category.id">{{ category.name }}
                                    </option>
                                </select>
                                <ps-label-caption v-if="coreField.mandatory == 1" textColor="text-red-500 "
                                    class="block mt-2">{{ errors.subCategory_id }}</ps-label-caption>
                            </div>

                            <!-- for location city dropdown -->
                            <div v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'location_city_id' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }}<span
                                        v-if="coreField.mandatory == 1"
                                        class="font-medium text-red-800 ms-1">*</span></ps-label>
                                <ps-dropdown align="left" class="w-full mt-1 lg:mt-2">
                                    <template #select>
                                        <ps-dropdown-select ref="city" :placeholder="$t(coreField.placeholder)"
                                            :showCenter="true"
                                            :selectedValue="form.location_city_id == '' ? '' : cities.filter((city) => city.id == form.location_city_id)[0].name"
                                            @change="coreField.mandatory = 1 ? validateEmptyInput('location_city_id', form.location_city_id) : ''"
                                            @blur="coreField.mandatory = 1 ? validateEmptyInput('location_city_id', form.location_city_id) : ''" />
                                    </template>
                                    <template #list>
                                        <div class="w-full rounded-md shadow-xs bg-background dark:bg-backgroundDark">
                                            <div class="z-30 pt-2">
                                                <div v-if="cities.length == null">
                                                    <ps-label class="flex p-2" @click="route('city.index')">{{
                                                        $t('core__be_add_new_city') }}</ps-label>
                                                </div>
                                                <div v-else>
                                                    <div v-for="city in cities" :key="city.id"
                                                        class="flex items-center px-2 py-4 cursor-pointer w-96 hover:bg-primary-000 dark:hover:bg-secondary-700"
                                                        @click="[(form.location_city_id = city.id), coreField.mandatory = 1 ? validateEmptyInput('location_city_id', form.location_city_id) : '']">
                                                        <ps-label class="ms-2"
                                                            :class="city.id == form.location_city_id ? ' font-bold' : ''">{{
                                                                city.name }}</ps-label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </ps-dropdown>
                                <ps-label-caption v-if="coreField.mandatory == 1" textColor="text-red-500 "
                                    class="block mt-2">{{ errors.location_city_id }}</ps-label-caption>
                            </div>
                            <!-- end location city -->

                            <div class="py-3"
                                v-for="(coreField, index) in coreFieldFilterSettings.filter((coreField) => coreField.original_field_name === 'description' && coreField.enable === 1 && coreField.is_delete === 0)"
                                :key="index">
                                <ps-label class="text-base">{{ $t(coreField.label_name) }} <span
                                        v-if="coreField.mandatory == 1"
                                        class="font-medium text-red-800 ms-1">*</span></ps-label>
                                <ps-textarea rows="3" ref="description" v-model:value="form.description"
                                    :placeholder="$t(coreField.placeholder)"
                                    @keyup="coreField.mandatory == 1 ? validateEmptyInput('description', form.description) : ''"
                                    @blur="coreField.mandatory == 1 ? validateEmptyInput('description', form.description) : ''"></ps-textarea>
                                <ps-label-caption v-if="coreField.mandatory == 1" textColor="text-red-500 "
                                    class="block mt-2">{{ errors.description }}</ps-label-caption>
                            </div>

                            <div>
                                <ps-label class="text-base">{{ $t('blog__blog_status') }}</ps-label>
                                <ps-checkbox-value v-model:value="form.status" class="font-normal" title="Publish" />
                            </div>

                            <div class="flex flex-row justify-end mb-2.5">
                                <ps-button @click="handleCancel()" textSize="text-base" type="reset" class="me-4"
                                    colors="text-primary-500" hover="">{{ $t('core__be_btn_cancel') }}</ps-button>
                                <ps-button class="transition-all duration-300 min-w-3xs" padding="px-7 py-2"
                                    rounded="rounded" hover="" focus="">
                                    <ps-loading v-if="loading"
                                        theme="border-2 border-t-2 border-text-8 border-t-primary-500"
                                        loadingSize="h-5 w-5" />
                                    <ps-icon v-if="success" name="check" w="20" h="20"
                                        class="me-1.5 transition-all duration-300" />
                                    <ps-label v-if="success" class="transition-all duration-300"
                                        textColor="text-white dark:text-secondaryDark-black">{{ $t('core__be_btn_saved')
                                        }}</ps-label>
                                    <ps-label v-if="!loading && !success"
                                        textColor="text-white dark:text-secondaryDark-black"> {{ $t('core__be_btn_save') }}
                                    </ps-label>
                                </ps-button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </ps-card>
    </ps-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import PsLayout from "@/Components/PsLayout.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import useValidators from "@/Validation/Validators";
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsLabelHeader6 from "@/Components/Core/Label/PsLabelHeader6.vue";
import PsCard from "@/Components/Core/Card/PsCard.vue";
import PsLoading from "@/Components/Core/Loading/PsLoading.vue";
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsCheckboxValue from "@/Components/Core/Checkbox/PsCheckboxValue.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import PsLabelTitle3 from "@/Components/Core/Label/PsLabelTitle3.vue";
import PsTextarea from '@/Components/Core/Textarea/PsTextarea.vue';
import PsDropdown from "@/Components/Core/Dropdown/PsDropdown.vue";
import PsDropdownSelect from "@/Components/Core/Dropdown/PsDropdownSelect.vue";
import PsImageUpload from "@/Components/Core/Upload/PsImageUpload.vue";
import { trans } from 'laravel-vue-i18n';

export default defineComponent({
    name: "Create",
    components: {
        Head,
        PsBreadcrumb2,
        PsInput,
        PsLabel,
        PsButton,
        PsLabelHeader6,
        PsCard,
        PsLoading,
        PsIcon,
        PsCheckboxValue,
        PsLabelCaption,
        PsLabelTitle3,
        PsTextarea,
        PsDropdown,
        PsDropdownSelect,
        PsImageUpload
    },
    layout: PsLayout,
    props: [
        "errors",
        "cities",
        "coreFieldFilterSettings",
        'categories',
        'subCategories'
    ],
    data() {
        return {
            location_city: ""
        };
    },
    setup(props) {
        const loading = ref(false);
        const success = ref(false);
        const name = ref();
        const location_city_id = ref();
        const description = ref();
        let newSubCatData = ref([]);

        // Client Side Validation
        const { isEmpty, minLength } = useValidators();

        const validateNameInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 3);
            if (fieldName == 'name') {
                name.value.isError = (!Boolean(props.errors.name)) ? false : true;
            }
        };

        const validateSubCategory = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 3);
            if (fieldName == 'subCategory_id') {
                name.value.isError = (!Boolean(props.errors.subCategory_id)) ? false : true;
            }
        };

        const validateEmptyInput = (fieldName, fieldValue, errorMessage = "") => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue, errorMessage) : "";
            // if(fieldName == 'title'){
            //     title.value.isError = (props.errors.title == '') ? false: true;
            // }
            if (fieldName == 'description') {
                description.value.isError = (props.errors.description == '') ? false : true;
            }
        };

        let form = useForm({
            name: "",
            description: "",
            location_city_id: "",
            status: true,
            cover: '',
            link: "",
            link_type: "",
            type: "",
            category_id: "",
            subCategory_id: "",
        });

        function handleSubmit() {
            this.$inertia.post(route("blog.store"), form, {
                forceFormData: true,
                onBefore: () => {
                    loading.value = true;
                },
                onSuccess: () => {
                    loading.value = false;
                    success.value = true;
                    setTimeout(() => {
                        success.value = false;
                    }, 2000);
                },
                onError: () => {
                    loading.value = false;
                    name.value.isError = (!Boolean(props.errors.name)) ? false : true;
                    location_city_id.value.isError = (!Boolean(props.errors.location_city_id)) ? false : true;
                },
            });
        }

        return { validateNameInput, validateSubCategory, validateEmptyInput, handleSubmit, form, loading, success, name, location_city_id, description, newSubCatData };
    },
    computed: {
        breadcrumb() {

            return [
                {
                    label: trans('core__be_dashboard_label'),
                    url: route('admin.index')
                },
                {
                    label: trans('blog_module'),
                    url: route('blog.index'),
                },
                {
                    label: trans('blog__add_blog'),
                    color: "text-primary-500"
                }
            ]

        }
    },
    methods: {
        handleCancel() {
            this.$inertia.get(route("blog.index"));
        },
        // Link Type
        onSelectChange(link_type) {
            this.form.link_type = link_type;
        },
        onTypeChange(type) {
            this.form.type = type;
            // TODO: If type == 'category' then the categories block will be activated
            if (this.form.type == 'main') {
                this.onCategoryChange(0)
            }
        },
        onCategoryChange(catID) {
            this.form.category_id = catID;
            // TODO: Call Api TO GET SubCategories
            this.newSubCatData = this.subCategories.filter((ele) => ele.category_id == catID);
        },
        onSubCategoryChange(subCatID) {
            this.form.subCategory_id = subCatID;
        }
    },
});
</script>
