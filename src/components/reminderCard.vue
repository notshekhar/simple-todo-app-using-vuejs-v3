<template>
    <div>
        <li>
            <div class="todocard">
                <input
                    id="option"
                    type="checkbox"
                    name="field"
                    value="option"
                    :checked="reminder.done"
                    @click="done"
                />
                <label for="option">
                    <span>
                        <span />
                    </span>
                </label>
                <span @click="done" :class="{ done: reminder.done }">{{
                    reminder.value
                }}</span>
                &nbsp;&nbsp;
                <button @click="deleteTodo" className="delete">
                    <img src="../assets/delete.svg" />
                </button>
            </div>
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
            localStorage.setItem(
                "reminders",
                JSON.stringify(reminderState.reminders)
            )
        }
        function deleteTodo() {
            reminderState.reminders.splice(props.index, 1)
            localStorage.setItem(
                "reminders",
                JSON.stringify(reminderState.reminders)
            )
        }
        return {
            done,
            deleteTodo,
        }
    },
}
</script>

<style></style>
