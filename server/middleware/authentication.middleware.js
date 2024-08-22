import { isAuthenticated } from "middleware/auth";

export default function handler(req, res) {
  if (isAuthenticated(req)) {
    // User is authenticated
    res.json({ message: "You are authenticated" });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
