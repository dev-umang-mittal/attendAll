import axios from "axios"
const baseUrl = "https://jsonplaceholder.typicode.com/todos"

export const dataProvider = {
    getList:    (resource, params) => {
    console.log("🚀 ~ file: DataProvider.js ~ line 6 ~ params", params)
    console.log("🚀 ~ file: DataProvider.js ~ line 6 ~ resource", resource)
        axios.get(baseUrl).then(res=> console.log(res));
    }, // get a list of records based on sort, filter, and pagination
    getOne:     (resource, params) => Promise, // get a single record by id
    getMany:    (resource, params) => Promise, // get a list of records based on an array of ids
    getManyReference: (resource, params) => Promise, // get the records referenced to another record, e.g. comments for a post
    create:     (resource, params) => Promise, // create a record
    update:     (resource, params) => Promise, // update a record based on a patch
    updateMany: (resource, params) => Promise, // update a list of records based on an array of ids and a common patch
    delete:     (resource, params) => Promise, // delete a record by id
    deleteMany: (resource, params) => Promise, // delete a list of records based on an array of ids
}