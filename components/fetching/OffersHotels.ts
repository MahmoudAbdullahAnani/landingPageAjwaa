import axios from "axios";

export const OffersHotels = async () => {
  return await axios
    .get(
      process.env.NEXT_PUBLIC_NODE_MODE === "development"
        ? `${process.env.NEXT_PUBLIC_API_LOCAL}/offers-hotels`
        : `${process.env.NEXT_PUBLIC_API_PRODUCTION}/offers-hotels`
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
