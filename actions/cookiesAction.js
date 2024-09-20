'use server';
import { cookies } from "next/headers";

export const SetUserToken = async (token) => {
    const cookiesStore = cookies();
    cookiesStore.set('user', token, 
        {
            sameSite : true,
            secure : true
        }
    )
}