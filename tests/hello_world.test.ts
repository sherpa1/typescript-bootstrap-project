import { describe, expect, test } from '@jest/globals';
import hello_world from "../src/main";


describe('main function', () => {
    test('main function returns the string "Hello, World !"', () => {
        expect(hello_world()).toMatch("Hello, World !");
    })
});