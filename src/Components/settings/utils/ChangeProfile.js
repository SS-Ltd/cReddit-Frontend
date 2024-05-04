import { patchRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

const url = `${baseUrl}/user/change-`;


export async function changeProfile(property, values) {
    console.log(url + property, values)
    const res = await patchRequest(url + property, values);

    return res.status === 200;
}