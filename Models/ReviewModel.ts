import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        remove_id: {
            type: String,
        },
        update_id: {
            type: String,
        },
        stars: {
            type: String,
        },
        review: {
            type: String,
        },
        name: {
            type: String,
        },
        role: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const ReviewModel = mongoose.model("Review", ReviewSchema);
export default ReviewModel;
