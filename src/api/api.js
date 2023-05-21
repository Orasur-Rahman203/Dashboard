import Swal from "sweetalert2";
import caxios from "./customAxios";
import { handleSuccessResponse } from "./responseHandlers";

export const login = async (authUsername, authPass, grantType, phoneNumber, password) => {
  //   const bdPhoneNumberRegex = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
  const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
  const passwordRegex = /^.{6,}$/;

  if (!bdPhoneNumberRegex.test(phoneNumber)) {
    Swal.fire({
      title: `Validation Error!`,
      text: "Invalid phone number. Please enter a valid Bangladeshi phone number.",
      icon: "error",
      confirmButtonText: "Done",
    });
    return;
  }

  if (!passwordRegex.test(password)) {
    Swal.fire({
      title: `Validation Error!`,
      text: "Password must be at least 6 characters long.",
      icon: "error",
      confirmButtonText: "Done",
    });
    return;
  }
  const loginData = await caxios.post("/auth/login", {
    authorization: `${authUsername}:${authPass}`,
    grant_type: grantType,
    phoneNumber,
    password,
  });

  handleSuccessResponse(loginData);

  // eslint-disable-next-line consistent-return
  return loginData;
};

// eslint-disable-next-line arrow-body-style
export const getRequest = async (url) => {
  // eslint-disable-next-line no-use-before-define
  return capi("get", url, null);
};

// eslint-disable-next-line no-use-before-define
export const postRequest = async (url, body) => capi("post", url, body);

// eslint-disable-next-line no-use-before-define
export const putRequest = async (url, body) => capi("put", url, body);

// eslint-disable-next-line no-use-before-define
export const delRequest = async (url, body) => capi("delete", url, body);

const capi = async (method, url, body) => {
  const config = {
    method,
    url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    data: {
      ...body,
    },
  };
  const capiData = await caxios.request(config);

  return capiData;
};
