<template>
    <div class="app">
        <div
            :class="{
                loading: reminderState.loading,
            }"
        >
            Loading...
        </div>
        <NewReminder />
        <RemindersFiled />
    </div>
</template>

<script>
import "./styles/style.css"
import NewReminder from "./components/NewReminder.vue"
import RemindersFiled from "./components/RemindersFiled.vue"
import { reminderState } from "./states"
import { onMounted } from "vue"
export default {
    setup() {
        onMounted(() => {
            let reminders = localStorage.getItem("reminders")
            reminderState.reminders = reminders ? JSON.parse(reminders) : []
            setTimeout(() => {
                reminderState.loading = false
            }, 400)
        })
        return {
            NewReminder,
            RemindersFiled,
            reminderState,
        }
    },
}
</script>

<style>
.loading {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 10;
}
</style>
