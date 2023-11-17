<script >
    import InputEditor from "$lib/InputEditor.svelte"
    const inputClass = "w-full rounded-lg bg-gray-800 border-white border text-white px-8 py-3 text-md"
</script>

<form class="flex flex-col items-center  space-y-4 bg-black px-32 py-32 w-1/2 relative ">

    <img src = "https://drive.google.com/uc?export=view&id=1-hNKf_ceozK7WtQybUeY9l-BiXfDdK1o" 
    class = " z-20 w-32 h-32 rounded-full justify-center border border-white p-2" alt="logo"/>

    <div class="text-white text-xl font-bold justify-center flex mb-8">
        Login to WC3
    </div>

    <InputEditor tailwind = {inputClass} inside="User-ID" utext="text-[2px] top-[0.5px]"/>

    <InputEditor tailwind = {inputClass} inside = "Password" type="password" utext="text-[2px] top-[0.5px]"/>

    <div class = "w-full flex text-sm text-blue-200 hover:text-blue-400 hover:cursor-pointer justify-end" >
        Forgot password
    </div>


    <button class = "bg-green-400 p-4 rounded-md w-full" > 
        Login
    </button>




</form>
