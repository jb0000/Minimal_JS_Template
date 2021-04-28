import { expect } from 'chai';
import { add } from '../lib/app.js';

describe("app", () =>{
    it("adds two numbers", () => {
        expect(add(2,2)).to.equal(4);
    });
    it("this test fails", () => {
        expect(add(2,2)).to.equal(5);
    });
});
