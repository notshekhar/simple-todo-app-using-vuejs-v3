<template>
    <div className="header">
        <span className="total">
            Total : {{ totalTodos }}, Unchecked :{{ unchecked }}
        </span>
        <button className="add" @click="createnew">Add Todo</button>
    </div>
</template>

<script>
import { reminderState } from "../states"
import { computed } from "vue"

export default {
    setup() {
        const totalTodos = computed(() => reminderState.reminders.length)
        const unchecked = computed(
            () => reminderState.reminders.filter((e) => !e.done).length
        )
        function createnew() {
            let input = prompt("enter something")
            if (input.length > 0) {
                reminderState.reminders.push({
                    id: Date.now(),
                    value: input,
                    done: false,
                })
                localStorage.setItem(
                    "reminders",
                    JSON.stringify(reminderState.reminders)
                )
            }
        }
        return {
            createnew,
            totalTodos,
            unchecked,
        }
    },
}
</script>

<style></style>
