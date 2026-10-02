export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    standardized_address: "Flat 402, Green Glen Layout, Bengaluru",
    pincode: "560103",
    latitude: 12.9279,
    longitude: 77.6750,
    serviceable: true
  });
}
