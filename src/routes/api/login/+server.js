import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export function GET({ url }) {	
    
    const min = Number(url.searchParams.get('min') ?? '0');	
    const max = Number(url.searchParams.get('max') ?? '1');
	const d = max - min;		

	if (isNaN(d) || d < 0) {
        throw error(400, 'min and max must be numbers, and min must be less than max');	
    }

	const random = min + Math.random() * d;
	return new Response(String(random));
}


export async function POST({request}) {


    console.log("request");

    //console.log(request)

    console.log(request.body)

    const credential = request.body.credential;

    // Do something with the credential (e.g., verify it, process it)
    console.log('Received credential:', credential);
  
    

    return new Response("Success")
}