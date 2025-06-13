import API from "../_api";

export const getTransactions = async () => {
  const { data } = await API.get("/transactions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data.data;
};

export const createTransaction = async (data) => {
  try {
    const response = await API.post("/transactions", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTransaction = async (id) => {
  try {
    const { message } = await API.delete(`transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return message.message;
  } catch (error) {
    console.log(error);
    return error;
  }
};