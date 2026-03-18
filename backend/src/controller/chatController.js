import { chatClient } from "../lib/stream.js"

export async function getStreamToken(req, res) {
    try {
        const token = chatClient.createToken(req.user.clerkId);

        res.status(200).json({
            token, 
            userId: req.user.clerkId,
            userNmae: req.user.name,
            userImage: req.uer.image,
        })
    } catch (error) {
        console.log("Error in getStreamToken contoller:", error.message);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}