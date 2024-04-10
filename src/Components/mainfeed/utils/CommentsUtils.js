import { baseUrl } from "../../../constants";
import { postRequest } from "../../../services/Requests";

export async function UpDownVoteComment(commentId, voteType) {
    const url = `${baseUrl}/post/${commentId}/${voteType ? 'upvote' : 'downvote'}`;
    const res = await postRequest(url);
    return res.status === 200;
}

export async function Save(commentId, isSaved) {
    const url = `${baseUrl}/post/${commentId}/save`;
    const res = await postRequest(url, { isSaved });
    return res.status === 200;
}