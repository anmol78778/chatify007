import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
}

// CLOUDINARY_CLOUD_NAME=dxsqx0xx1
// CLOUDINARY_API_KEY=651993164571756
// CLOUDINARY_API_SECRET=xRuevjfswQnWUeWrFoV_OFv2RO0
// PORT=3000
// MONGO_URI=mongodb+srv://anmolkroe_db_user:0weU8ov2oNWJfJOm@cluster0.yqykswi.mongodb.net/?appName=Cluster0
// NODE_ENV=development

// JWT_SECRET=mysecret

// RESEND_API_KEY=re_6zeFyNSZ_GLXM8D98GAdb5Ang3axd8b5Y

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="Anmol"

// CLIENT_URL=http://localhost:5173