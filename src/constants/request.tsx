import axios from "axios";

export const URL: string = 'https://randomuser.me/api/';

export const REQUEST = async(page: number) => await axios.get(URL ,{
    params: {
        page: page,
        results: 10,
        seed: 'abc',
    }
});
