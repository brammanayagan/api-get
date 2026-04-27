export const userValidation = async (req, res, next) => {
  try {
    const { userName, mobile, email, password } = req.body;

    if (!userName || !mobile || !email || !password) {
      res.status(400).json({ msg: "All fields are required" });
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
