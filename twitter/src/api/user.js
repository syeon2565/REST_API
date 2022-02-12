import { Router } from "express";
import User from "../models/User";
import checkLogin from "../middlewares/checkLogin";
import Follow from "../models/Follow";

const router = Router();

router.post("/follow/:userId", checkLogin, async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.userId } });
  if (!user) {
    return res.status(404).json({
      error: {
        message: "User not exist",
      },
    });
  }

  await Follow.create({
    followerId: req.params.userId,
  });

  res.json({
    data: {
      message: "Successfully followed",
    },
  });
});

router.post("/unfollow/:userId", checkLogin, async (req, res) => {
  const follow = await Follow.findOne({
    where: {
      followerId: req.params.userId,
    },
  });

  if (!follow) {
    return res.json({
      error: {
        message: "You didn't follow that user",
      },
    });
  }

  await follow.destroy();
  res.json({
    data: {
      message: "Successfully unfollowed",
    },
  });
});

export default router;
