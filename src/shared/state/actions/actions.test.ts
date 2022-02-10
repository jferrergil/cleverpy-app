/* eslint-disable jest/no-conditional-expect */
import axios from "axios";
import { loadPosts, deletePost } from './actions';

jest.mock("axios");

const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Given redux actions", () => {
    describe("When loadPost is called", () => {
        beforeEach(() => {
            mockAxios.get.mockResolvedValue({data: 123})
        })
        test("It should call axios", () => {
            const mockDispatch = jest.fn();

            loadPosts()(mockDispatch);
            expect(mockAxios.get).toHaveBeenCalled();
        })
    })
    describe("When loadPost is called with an error in axios", () => {
        beforeEach(() => {
            mockAxios.get.mockRejectedValue("Error test")
        })
        test("It should throw an error", () => {
            const mockDispatch = jest.fn();

            loadPosts()(mockDispatch);
            expect(mockAxios.get).toHaveBeenCalled();
        })
    })
    describe("When deletePost is called", () => {
        test('deletePost', () => {           

            expect(deletePost({body: "", id: 0, title: "", userId: 0})).toEqual({
                   payload: {
                     body: "",
                     id: 0,
                     title: "",
                     userId: 0,
                   },
                   type: "DELETE_POST"})
        })
    })
    

    
})