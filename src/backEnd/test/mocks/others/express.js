import sinon from "sinon";

export const req = {};
export const res = {
  send: sinon.mock()
};
export default sinon.mock();