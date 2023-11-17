<script >

    export let type = "";
    export let tailwind = "";
    export let inside = "";

    export let utext = "text-[2px] top-0	 ";


    let css = "absolute opacity-60"
    let text = ""

    function handleInputChange(event) {
    text = event.target.value;

    console.log("text has been changed to:" + text)

    if ( text.length > 0) {
        css = "absolute transition-all duration-300  opacity-60 " + utext
    }

    else {
        css = "absolute opacity-60"
    }
  }

</script>



<div class={tailwind+ " relative "}>

    <input 
        type = {type}
        class = "absolute bg-transparent focus:border-transparent focus:outline-none z-40"
        on:input={handleInputChange}    
    />

    <div class={css}>
        {inside}
    </div>

    <div class="opacity-0">
        {inside}
    </div>

</div>


