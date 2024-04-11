import { baseUrl } from "../../../constants";
import { postRequest, getRequest } from "../../../services/Requests";

/**
 * Posts a new comment.
 * 
 * @async
 * @param {string} postId - The ID of the post to comment on.
 * @param {ArrayBuffer[]} images - The images of the comment.
 * @param {string} text - The text of the comment.
 * @returns {Object|null} The new comment, or null if the request failed.
 */
export async function postComment(postId, images, text) {
    let url = `${baseUrl}/comment`;
    console.log({ postId, images, text })
    let res = await postRequest(url, { postId, images, text });
    if (res.status !== 200) return null;
    url = `${baseUrl}/comment/${res.commentId}`;
    res = await getRequest(url);
    console.log(`new comment: ${res.data}`);
    return res.data;
}

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

