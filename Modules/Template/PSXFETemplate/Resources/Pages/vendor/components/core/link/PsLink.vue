<template>
    <a :href="url" class="text-base" target="_blank" :class="textColor === '' ? 'text-feSecondary-500 dark:text-feSecondaryDark-white' : textColor" rel="noreferrer"> 
        <slot></slot>
    </a>      
</template>

<script lang='ts'>
export default {
    name : 'PsLink',
    props: {
        textColor : {
            type: String,               
            default: 'text-feSecondary-500 dark:text-feSecondaryDark-white',                
        },
        url : {
            type : String
        }        
    }
}
</script>
