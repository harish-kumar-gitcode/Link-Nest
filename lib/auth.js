import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_KEY;

//Signing the data.
export function signToken(payload) {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

//Verifying the data.
export function verifyToken(token) {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
}
