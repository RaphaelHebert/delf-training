import { signal, Signal } from '@preact/signals-react'

export const authToken: Signal<string | null> = signal(null)

export const isLoggedIn: Signal<boolean> = signal(false)
