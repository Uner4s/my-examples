import { message } from "antd";

const setUserToken = (token) => window.localStorage.setItem("userToekn", token);

const getToken = () => window.localStorage.getItem("userToken");

const get = async (url) => {
  const token = getToken();

  try {
    const response = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    const responseText = await response.json();
  } catch (error) {
    console.log(error);
    message.error("Ocurrió un error al conectar con el servidor");
  }
};

const post = async (url, params) => {
  const token = getToken();

  try {
    const response = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(params || {}),
    });

    const responseText = await response.json();
  } catch (error) {
    console.log(error);
    message.error("Ocurrió un error al conectar con el servidor");
  }
};

export { get, post };
