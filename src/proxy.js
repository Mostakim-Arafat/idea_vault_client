import { NextResponse } from 'next/server'
import { getUserData } from './lib/crud'
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const user = await getUserData()
    console.log(user)
    if(!user){
         return NextResponse.redirect(new URL('/Login', request.url))
    }
     return NextResponse.next()
 
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/AddIdeas','/My-idea','/My-interaction','/Ideas/:id'],
}