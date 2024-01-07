<template>
    <div :class="[textColor, textSize]" @click="clickRoute">
        <slot></slot>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";

export default {
    name : 'PsRouteLink',
    props: {
        textColor : {
            type: String,
            default: 'text-secondary-500 dark:text-secondaryDark-white'
        },
        textSize : {
            type : String,
            default : 'text-base'
        },
        // name : {
        //     type : String,
        //     default : 'dashboard'
        // },
        to : {
            type : Object,
            default : {name : 'dashboard'}
        }
    },
    setup(props) {
        function clickRoute(){
            if(props.to.params){
                Inertia.get(route(props.to.name),props.to.params);
            }else if(props.to.query){
                Inertia.get(route(props.to.name),props.to.query);
            }else{
                Inertia.get(route(props.to.name));
            }

        }
        return{
            clickRoute
        }
    }
}
</script>
