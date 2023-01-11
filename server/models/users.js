const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            label: "firstName",
        },
        lastName: {
            type: String,
            required: true,
            label: "lastName",
        },
        major: {
            type: String,
            required: false,
            label: "major",
        },
        gradTerm: {
            type: String,
            required: false,
            label: "gradTerm",
        },
        email: {
            required: true,
            type: String,
            unique: true,
        },
        password: {
            required: true,
            min: 8,
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { collection: "thrifty" }
)

module.exports = mongoose.model("users", userSchema)
