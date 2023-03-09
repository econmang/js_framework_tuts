import { APIEvent } from "solid-start";

/*
type KanbanBoard = {
    title: string,
    content: string
};
*/

export async function GET({request}: APIEvent) {
    //const kBoard: KanbanBoard = { title: request.url, content: content}
    return new Response("hello")
}
