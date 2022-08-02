import axios from "axios";
import { TOKEN_CYBERSOFT } from "../constants/common.js";

const fetchMovieListApi = () => {
  return axios({
    url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET",
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export { fetchMovieListApi };