<script >
    const inputClass = "rounded-full bg-gray-800 border-white border text-white px-4 py-2"
</script>

<form class="flex flex-col justify-center space-y-4 bg-black px-64 py-56">

    <div class="text-white text-xl font-bold justify-center flex mb-8">
        Login to West-Computing-Club
    </div>

    <input class = {inputClass} placeholder="User-ID"/>


    <input class = {inputClass} placeholder="Password" type="password"/>

    <div class = "flex text-sm text-blue-200 hover:text-blue-400 hover:cursor-pointer justify-end" >
        Forgot password
    </div>


    <button class = "bg-green-400 p-4 rounded-md" > 
        Login
    </button>




</form>
