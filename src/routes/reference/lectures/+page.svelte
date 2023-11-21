<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data

</script>

<div class=" p-4">

    <div>
        List of Lectures
    </div>


    <table id="tol-id">
        <thead>
            <tr>
                <th>Link Text</th>
                <th>Link URL</th>
            </tr>
        </thead>
        <tbody>
            {#each data.info as collection}
                <tr>
                    <td>
                        {collection.names}
                    </td>

                    <td>
                        {collection.link}
                    </td>
                </tr>

            {/each}
        </tbody>

    </table>
</div>