import { NextResponse } from 'next/server';

const BASE_URL='https://maps.googleapis.com/maps/api/place/textsearch/json?'
const GOOGLE_PLACE_KEY = process.env.GOOGLE_PLACE_KEY;

export async function GET(request:any){

    return NextResponse.json({Data:'Hi'})
}