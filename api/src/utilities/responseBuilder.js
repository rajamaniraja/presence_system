


const getResponse = (data) => {
    return {
        status:'ok',
        ...data
    }
}


const getError = (data) => {
    return {
        status:'error',
        ...data
    }
}


export {
    getResponse,
    getError
}