import { http, HttpResponse } from "msw"
import { baseUrl } from "../constants"
export const postHandlers = [
    // get posts --> ADD TO API
    http.get(`/posts`, (resolver) => {
        return HttpResponse.json([
            {
                postId: "350651awd651awd",
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
                postId: "350651awd651awd",
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
                postId: "350651awd651awd",
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
    }
    ),

]