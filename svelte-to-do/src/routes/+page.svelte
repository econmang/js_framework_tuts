<script lang=ts>
    import { todo_list, add_todo_item, remove_todo_item } from './stores'

    let todoItem = "";
    
    function handleClickAdd() {
        add_todo_item(todoItem);
        todoItem = "";
    }

    function handleClickRemove(id: Number) {
        remove_todo_item(id);
    }
</script>

<div class=content>
    <h1>To-Do List:</h1>

    <div class="list">
        {#each $todo_list as todo_item, id}
        <div class="item">
            <div class="checkbox-item item-child">
                    <input name={"check" + id.toString()} title="Mark Done" type="checkbox">
                    <label for={"check"+id.toString()} class="item-text">{todo_item}</label>
            </div>
            <div class="item-child"><button class="delete" title="Delete" on:click={() => {handleClickRemove(id)}}>🗑</button></div>
        </div>
        {/each}
    </div>
    <br><br>

    <form on:submit|preventDefault={handleClickAdd}>
        <div class="controls">
            <input type="text" bind:value={todoItem}>
            <button on:click={handleClickAdd}>＋</button>
        </div>
    </form>
</div>

<style>
    input[type=checkbox]:checked + label.item-text {
        text-decoration: line-through;
        text-decoration-color: red;
        text-decoration-thickness: 3px;
    }
    .controls input,
    .controls button {
        font-size: 25px;
    }
    .item-text {
        overflow-y: scroll;
    }
    .content {
        background: skyblue; 
        padding: 30px;
        padding-bottom: 400px;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    h1 {
        width: 400px;
        background: white;
        color: black;
        text-align: center;
        font-family:Arial, Helvetica, sans-serif;
        margin: 0px auto 30px auto
    }
    .controls {
        margin: 5px auto 5px auto;
        text-align: center;
    }
    .list {
        font-size: 20px;
        font-weight: bold;
    }
    .item {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        width: 350px;
        color: black; 
        margin: 0 auto 15px auto;
    }
    .checkbox-item {
        background-color:lightgray;
        padding: 30px;
        border-radius: 0.5em;
        width: 70%;
    }
    .item-child {
        display: inline-block;
        padding: 1rem 1rem;
        vertical-align: middle;
    }
    .delete {
        font-size: 20px;
    }
</style>
