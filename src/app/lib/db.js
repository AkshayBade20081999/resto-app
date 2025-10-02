const { NEXT_PUBLIC_MONGO_USER, NEXT_PUBLIC_MONGO_PASS } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  NEXT_PUBLIC_MONGO_USER +
  ":" +
  NEXT_PUBLIC_MONGO_PASS +
  "@cluster0.dvsimtc.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0";
