export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const visitorData = {
        ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
        userAgent: req.headers["user-agent"],
        timestamp: new Date().toISOString(),
    };

    console.log("Visitor:", visitorData);

    // Later, this is where you'd store data in a database
    // For now, we're just logging to console

    res.status(200).json({ success: true, message: "Visit logged" });
}
