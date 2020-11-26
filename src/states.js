import { reactive } from "vue"

export const exampleState = reactive({
    count: 0,
})

export const reminderState = reactive({
    loading: true,
    reminders: [],
})
