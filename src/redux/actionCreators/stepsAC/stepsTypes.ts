type stepStatus = "process" | "finish" | "wait"

type stepColor = "#06d44b" | "#1890ff" | "#bfbfbf"

/* export type step = {
    type: string
    status: stepStatus
    color: stepColor
} */

type stepitem = {
    status: stepStatus
    color: stepColor
}

export type step = {
    type: string
    step: stepitem[]
}