import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. check if the user exist
  // 2. create the user if it doesn't exist
  // 3. return the user object to the calling client

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send({
        success: "User exist",
        existingUser,
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating user" });
  }
};

// const logoutUser = async (req: Request, res: Response) => {
//   try {
//     const { auth0Id } = req.body;
//     const existingUser = await User.findOne({ auth0Id });

//     if (existingUser) {
//       const deleteId = await User.deleteOne({ existingUser });
//       return res.status(200).send({
//         success: deleteId,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error in Logout of user" });
//   }
// };

export default {
  createCurrentUser,
  // logoutUser,
};
