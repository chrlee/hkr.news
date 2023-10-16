<svelte:head>
    <title>hkr.news</title>
</svelte:head>

<script>
    import Icon from "@iconify/svelte";
</script>

<nav>
    <div class="menuButton">
        <Icon icon="line-md:close-to-menu-transition" inline={true} width="1.5em" height="1.5em" />
    </div>
    <h1>hkr.news</h1>
    <div />
</nav>

<style>
    nav {
        position: sticky;
        top: 2%;
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
        align-self: flex-start;
        @media only screen and (min-width: 1024px) {
            flex-direction: column;
            width: initial;
        }
    }

    .menuButton{
       @media only screen and (min-width: 1024px) {
            display: none;
        } 
    }
</style>