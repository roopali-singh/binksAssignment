import bcrypt from "bcryptjs";

const adminUser = {
  username: "Binks",
  password: bcrypt.hashSync("binksPassword", 8),
};

export default adminUser;
