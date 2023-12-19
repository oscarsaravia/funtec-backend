import express from "express";
import { createReview, deleteReview, getReviews, updateReview} from "../Controllers/ReviewController.ts";

const router = express.Router();

router.get("/", getReviews);
router.post("/create", createReview);
router.delete("/delete/:remove_id", deleteReview);
router.put("/update/:update_id", updateReview);

export default router;
