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

// Verifying sessions and sending data.
export async function verifyAuth(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch {
    return null;
  }
}
