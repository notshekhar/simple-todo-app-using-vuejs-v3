<template>
    <div>
        <div v-if="count > 100">{{ count }}</div>
        <button v-else @click="count++">Counter {{ count }}</button>
    </div>
</template>

<script>
import { exampleState } from "../states"
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return exampleState
    },
    mounted() {
        setInterval(() => this.count++, 1000)
    },
}
</script>
