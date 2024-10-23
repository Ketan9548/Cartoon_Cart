import mongoose from "mongoose";

const ConnectedDb = async () => {
  try {
    const connectedinstance = await mongoose.connect(
      `${process.env.MONGOOS_URL}/Kapilcartooncart`
    );
    console.log(
      `\n mongoDB Connected !! DB Host: ${connectedinstance.connection.host}`
    );
  } catch (error) {
    console.error("Mongoose Db Connection Failed: ", error);
    throw error;
  }
};

export default ConnectedDb;
