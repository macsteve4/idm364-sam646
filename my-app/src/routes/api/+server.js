import { supabase } from "$lib/supabase";

export async function GET() {
    try {
        const {data, error} = await supabase
        .from('noodles')
        .select('*');

        return new Response(JSON.stringify({noodles: data}), {
            headers: { 'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.error('Error fetching ramen noodles:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}