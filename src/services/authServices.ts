import httpClient from "./httpClient";

interface Credentials {
  email: string;
  password: string;
}

// function to login user 
export const loginUser = async (credential: Credentials) => {
  try {
    const response = await httpClient.post("/login", credential)

    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Login failed")
  }
}

// function to get the user profile 

export const getUserProfile = async ()=>{

  try {
    const response = await httpClient.get("/users/2")
    const user = {
      id: response.data.data.id,
      name: `${response.data.data.first_name} ${response.data.data.last_name}`,
      email: response.data.data.email,
      avatar: response.data.data.avatar,
    }

    return user;
  } catch (error: any) {
    throw new Error("Failed to fetch user profile")
  }
}