<svelte:options tag={null}/>

<script lang="ts">
    export let commitExpression
    export let mewType
    export let discard

    let text = ""
    if (!mewType) {
        mewType = {
            original: null
        }
    }
    function createMewInput(text) {
        let createMewInput = {
            mewType: mewType,
            mew: text
        }
        return createMewInput
    }

</script>

<div class="container">
    <input bind:value={text}>
    <button on:click={()=>commitExpression(createMewInput(text))}>Publish Mew</button>
    <button on:click={discard}>Discard</button>
</div>


<style>
    .container {
        color: burlywood;
        width: 400px;
        height: 300px;
    }

    input {
        width: 100%;
        height: 200px;
    }
</style>