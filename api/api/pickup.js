export default function handler(req, res) {
  const payload = req.body ? JSON.stringify(req.body) : "";
  if (payload.includes("Rural") || payload.includes("Village")) {
    return res.status(400).json({ status: "error", error_code: "PINCODE_UNSERVICEABLE", message: "No active pickup riders in this sector" });
  }
  res.status(200).json({ status: "scheduled", pickup_id: "DEL_PKUP_982312", eta: "45 mins" });
}
