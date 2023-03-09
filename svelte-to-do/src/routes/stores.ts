import { writable } from 'svelte/store'

export const todo_list = writable(new Array<String>());

export function add_todo_item(item: String): void {
	if (item.trim() != "") {
		todo_list.update((items) => {
			items.push(item)
			return items
		})
	}
}

export function remove_todo_item(index: Number): void {
	todo_list.update((items) => {
		items.splice(index)
		return items
	})
}
