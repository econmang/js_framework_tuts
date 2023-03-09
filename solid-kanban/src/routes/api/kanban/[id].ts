import { APIEvent } from "solid-start";

export function GET({params}: APIEvent) {
    return new Response(params.id)
}
