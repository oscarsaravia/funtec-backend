import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        department: {
            type: String,
        },
        time: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
export default AppointmentModel;
