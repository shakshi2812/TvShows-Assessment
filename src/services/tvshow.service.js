import axios from "axios";

function getAllShow() {
  return axios.get("http://api.tvmaze.com/shows");
}
function getShowInfo(showId) {
  return axios.get(`http://api.tvmaze.com/shows/${showId}`);
}
function getShowCast(showId) {
  return axios.get(`http://api.tvmaze.com/shows/${showId}/cast`);
}
function getSearchShow(showName) {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${showName}`);
}
export { getAllShow, getShowInfo, getShowCast, getSearchShow };
