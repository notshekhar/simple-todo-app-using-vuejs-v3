<template>
    <div>
        <li>
            <span
                @click="done"
                :class="{
                    notdone: !reminder.done,
                    'done-strik': reminder.done,
                }"
                >{{ reminder.value }}</span
            >
            <button @click="deleteTodo">Remove</button>
        </li>
    </div>
</template>

<script>
import { reminderState, exampleState } from "../states"
import { watchEffect } from "vue"
export default {
    props: {
        reminder: Object,
        index: Number,
    },
    setup(props) {
        function done() {
            props.reminder.done = !props.reminder.done
        }
        function deleteTodo() {
            reminderState.reminders.splice(props.index, 1)
        }
        return {
            done,
            deleteTodo,
        }
    },
}
</script>

<style></style>
