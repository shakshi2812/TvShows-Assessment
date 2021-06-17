import {
  getSearchShow,
  getAllShow,
  getShowInfo,
} from "../../../src/services/tvshow.service.js";
import axios from "axios";
jest.mock("axios");

describe("In show.service.js Test", () => {
  it("Mocking getShowsByName method ", () => {
    const showMockData = ["Breaking Bad", "The Wire"];
    axios.get.mockResolvedValue(showMockData);
    getSearchShow("Breaking").then((response) => {
      expect(response).toEqual(showMockData);
    });
  });

  it("Mocking getAllShows method ", () => {
    const showMockData = ["Game of Thrones", "Breaking Bad", "The Wire"];
    axios.get.mockResolvedValue(showMockData);
    getAllShow().then((response) => {
      expect(response).toEqual(showMockData);
    });
  });

  it("Mocking getShowInfo method ", () => {
    const showMockData = [
      { name: "Breaking Bad", id: "2" },
      { name: "GOT", id: "3" },
    ];
    axios.get.mockResolvedValue(showMockData);
    getShowInfo(2).then((response) => {
      expect(response).toEqual(showMockData);
    });
  });
});
