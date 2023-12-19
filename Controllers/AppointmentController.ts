import AppointmentModel from "../Models/AppointmentModel";

export const createAppointment = async (req: any, res: any) => {
  const newAppointment = new AppointmentModel(req.body);
  try {
    const result = await newAppointment.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
