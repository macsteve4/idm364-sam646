import { supabase } from "$lib/supabase";

export async function GET() {
    try {
        const {data, error} = await supabase
        .from('noodles')
        .select('*');

        if (error) {
            console.error('Error fetching noodles:', error);
            return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const prettyData = JSON.stringify({ noodles: data }, null, 2);

        return new Response(prettyData, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching ramen noodles:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}