import axios from "axios";

export let signIn = async (data) => {
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
        data
    );
    console.log(response);
    const token = response.data.token;
    // Store the token in local storage
    localStorage.setItem("token", token);
    return response;
};
export let signUp = async (data) => {
    let response = await axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      data
    );
    console.log(data);
    console.log(response);
    return response;
  };
  