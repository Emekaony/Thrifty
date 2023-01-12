const crypto = require("crypto")
const { v4: uuidv4 } = require("uuid")

const authToken = crypto.randomBytes(64).toString("base64")
const deviceId = uuidv4()

console.log(`Auth Token: ${authToken}\ndeviceId: ${deviceId}`)
