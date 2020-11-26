<template>
    <div class="field">
        <button>Delete All Todo</button>
        <ReminderCard
            v-for="(reminder, index) in reminderState.reminders"
            :reminder="reminder"
            :index="index"
            :key="reminder.id"
        />
    </div>
</template>

<script>
import { reminderState } from "../states"
import ReminderCard from "./reminderCard.vue"

export default {
    setup() {
        // reminderState.reminders = [{ id: 232323, value: "hello", done: true }]
        return {
            ReminderCard,
            reminderState,
        }
    },
}
</script>

<style></style>
