import moment from "moment";

const getCurrentDate = () => {
  let wrapped = moment(new Date()).format("LLLL");
  console.log(wrapped);
};

getCurrentDate();
