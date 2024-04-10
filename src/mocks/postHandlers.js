import { http, HttpResponse } from "msw"
import { baseUrl } from "../constants"
export const postHandlers = [
    // get posts --> ADD TO API
    http.get(`/post/home-feed`, (resolver) => {
        return HttpResponse.json([
            {
                _id: "350651awd651awd",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "r/DunderMifflin",
                communityName: "Watermelon",
                title: "Ignoring the fact that Karen = Ann, who from Parks and Rec would have made a fine addition to The Office (or vice versa)?",
                content: "Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation, Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                commentCount: 50,
                isNSFW: false,
                isSpoiler: false,
                isApproved: false,
                isUpvoted: false,
                isDownvoted: false,
                isHidden: false,
                isSaved: false,
                uploadDate: "2024-03-25T15:37:33.339+00:00",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00"
            },
            {
                _id: "450651awd651awd",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "r/DunderMifflin",
                communityName: "Watermelon",
                title: "Ignoring the fact that Karen = Ann, who from Parks and Rec would have made a fine addition to The Office (or vice versa)?",
                content: "Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation, Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                commentCount: 50,
                isNSFW: false,
                isSpoiler: false,
                isApproved: false,
                isUpvoted: false,
                isDownvoted: false,
                isHidden: false,
                isSaved: false,
                uploadDate: "2024-03-25T15:37:33.339+00:00",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00"
            },
            {
                _id: "550651awd651awd",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "r/DunderMifflin",
                communityName: "Watermelon",
                title: "Ignoring the fact that Karen = Ann, who from Parks and Rec would have made a fine addition to The Office (or vice versa)?",
                content: "Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation, Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation Who do you side with? I feel bad for Pam but I do think she was in the wrong in this situation",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                commentCount: 50,
                isNSFW: false,
                isSpoiler: false,
                isApproved: false,
                isUpvoted: false,
                isDownvoted: false,
                isHidden: false,
                isSaved: false,
                uploadDate: "2024-03-25T15:37:33.339+00:00",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00"
            },
        ])
    }),

    // get comment by id
    http.get(`${baseUrl}/comment/:commentId`, (resolver) => {
        return HttpResponse.json({
            _id: "350651awd651awxx",
            type: "Comment",
            username: "u/MICHAEL",
            communityName: "Watermelon",
            content: "Wow, I can't believe that happened! I'm so excited for the next post!",
            profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
            netVote: 500,
            isNSFW: false,
            isSpoiler: false,
            isApproved: false,
            isUpvoted: false,
            isDownvoted: false,
            isHidden: false,
            isSaved: false,
            isLocked: false,
            isEdited: false,
            isJoined: false,
            createdAt: "2024-03-25T15:37:33.339+00:00",
            updatedAt: "2024-03-25T15:37:33.339+00:00"
        })
    }),

    // get comments for a post
    http.get(`${baseUrl}/post/:postId/comments`, (resolver) => {
        return HttpResponse.json([
            {
                _id: "350651awd651awa",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "u/JIMBOB",
                communityName: "Watermelon",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                isImage: false,
                isSpoiler: false,
                isNSFW: false,
                isApproved: false,
                isLocked: false,
                isEdited: false,
                title: "Hello World",
                content: "Wow, I can't believe that happened! I'm so excited for the next post!",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00",
                createdAt: "2024-03-25T15:37:33.339+00:00",
                updatedAt: "2024-03-25T15:37:33.339+00:00",
                isUpvoted: false,
                isDownvoted: false,
                isSaved: false,
                isHidden: false,
                isJoined: false,
                isModerator: false
            },
            {
                _id: "350651awd651awb",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "u/CREED",
                communityName: "Watermelon",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                isImage: false,
                isSpoiler: false,
                isNSFW: false,
                isApproved: false,
                isLocked: false,
                isEdited: false,
                title: "Hello World",
                content: "Wow, I can't believe that happened! I'm so excited for the next post!",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00",
                createdAt: "2024-03-25T15:37:33.339+00:00",
                updatedAt: "2024-03-25T15:37:33.339+00:00",
                isUpvoted: false,
                isDownvoted: false,
                isSaved: false,
                isHidden: false,
                isJoined: false,
                isModerator: false
            },
            {
                _id: "350651awd651awc",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "u/DWIGHT",
                communityName: "Watermelon",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                isImage: true,
                isSpoiler: false,
                isNSFW: false,
                isApproved: false,
                isLocked: false,
                isEdited: false,
                title: "Hello World",
                content: "data: image/ png; base64, iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD + zAAAAilBMVEX / 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",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00",
                createdAt: "2024-03-25T15:37:33.339+00:00",
                updatedAt: "2024-03-25T15:37:33.339+00:00",
                isUpvoted: false,
                isDownvoted: false,
                isSaved: true,
                isHidden: false,
                isJoined: false,
                isModerator: false
            },
            {
                _id: "350651awd651awe",
                type: "(Images & Video) or (Normal) or (Poll) or (Links)",
                username: "u/ANGELA",
                communityName: "Watermelon",
                profilePicture: "drive.creddit.com/subreddit_or_user_pfp",
                netVote: 1500,
                isImage: false,
                isSpoiler: false,
                isNSFW: false,
                isApproved: false,
                isLocked: false,
                isEdited: false,
                title: "Hello World",
                content: "Wow, I can't believe that happened! I'm so excited for the next post!",
                pollOptions: [
                    {
                        option: "Option 1",
                        isVoted: false,
                        votes: 10
                    }
                ],
                expirationDate: "2024-03-25T15:37:33.339+00:00",
                createdAt: "2024-03-25T15:37:33.339+00:00",
                updatedAt: "2024-03-25T15:37:33.339+00:00",
                isUpvoted: false,
                isDownvoted: false,
                isSaved: false,
                isHidden: false,
                isJoined: false,
                isModerator: false
            },
        ]
        )
    }),

    // comment on a post
    http.post(`${baseUrl}/comment`, (resolver) => {
        return HttpResponse.json({
            message: "Comment posted successfully",
            commentId: "350651awd651awx"
        })
    }),

    // upvote a post
    http.post(`${baseUrl}/post/:postId/upvote`, (resolver) => {
        return HttpResponse.json({ message: "Post voted successfully" })
    }),

    // downvote a post
    http.post(`${baseUrl}/post/:postId/downvote`, (resolver) => {
        return HttpResponse.json({ message: "Post voted successfully" })
    }),

    // save a post
    http.post(`${baseUrl}/post/:postId/save`, (resolver) => {
        return HttpResponse.json({ message: "Post saved successfully" })
    }),
]