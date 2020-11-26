<template>
    <div class="header">
        <button @click="createnew">Create new reminder</button>
    </div>
</template>

<script>
import { reminderState } from "../states"
import "../styles/newreminder.css"
export default {
    setup() {
        function createnew() {
            let input = prompt("enter something")
            reminderState.reminders.push({
                id: Date.now(),
                value: input,
                done: false,
            })
            localStorage.setItem("reminders", JSON.stringify(reminderState.reminders))
        }
        return {
            createnew,
        }
    },
}
</script>

<style></style>
