import ReviewModel from "../Models/ReviewModel";

export const createReview = async (req: any, res: any) => {
  const newReview = new ReviewModel(req.body);
  try {
    const result = await newReview.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReviews = async (req: any, res: any) => {
    try {
        const reviews = await ReviewModel.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateReview = async (req: any, res: any) => {
    try {
        const updatedReview = await ReviewModel.findByIdAndUpdate(
            req.params.update_id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteReview = async (req: any, res: any) => {
    try {
        await ReviewModel.findByIdAndDelete(req.params.remove_id);
        res.status(200).json("Review deleted");
    } catch (error) {
        res.status(500).json(error);
    }
};
