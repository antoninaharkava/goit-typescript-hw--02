import axios from "axios";

export interface ApiResponse {
  data: {
    results: {
      id: string;
      urls: {
        small: string;
        regular: string;
      };
      alt_description: string | null;
      description: string | null;
      user: {
        username: string;
      };
      likes: number;
    }[];
    total_pages: number;
  };
}

export const requestPhotoByKey = async (
  keyWord: string,
  page: number
): Promise<ApiResponse> => {
  const axiosParams = {
    params: {
      page,
      per_page: 12,
      query: keyWord,
      orientation: "landscape",
      client_id: "eODma-0uQ6AdaAgfF92XItapDKYqSt1C3dXNPkPmfBE",
    },
    baseURL: "https://api.unsplash.com/",
  };

  return axios.get("/search/photos", axiosParams);
};