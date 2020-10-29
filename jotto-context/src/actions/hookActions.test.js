import moxios from "moxios";
import { getSecretWord } from "./hookActions";

describe("moxios tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test(" call getSecretWord callback on axios reponse", async () => {
    let secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // mock on callback arg
    const mocksetSecretWord = jest.fn();

    await getSecretWord(mocksetSecretWord);

    // see weather mock run with correct arguement
    expect(mocksetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
