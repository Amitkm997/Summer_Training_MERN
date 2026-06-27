import dns from "dns/promises";

try {
  const records = await dns.resolveSrv(
    "_mongodb._tcp.cluster0.phh7n49.mongodb.net"
  );

  console.log(records);
} catch (error) {
  console.log(error);
}