const { MONGO_USER, MONGO_PASS } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  MONGO_USER +
  ":" +
  MONGO_PASS +
  "@cluster0.dvsimtc.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0";
