<script lang="typescript">
    import Component from './components/components.module.js';
    import {IFace} from "./components/types"

    const name: IFace = {
        nose: true, head: true
    }
</script>

<style>

</style>


<Component {name}/>
