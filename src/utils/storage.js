/**
 * 本地存储-> 存值
 * */
const setStorage = (key, value) => {
    return new Promise((resolve, reject) => {
        uni.setStorage({
            key: key,
            data: JSON.stringify({data: value}),
            success: () => {
                resolve(`save ${key} success,`)
            },
            fail: (error) => {
                reject(error)
            }
        });
    })
};

/**
 * 本地存储-> 取值
 * */
const getStorage = (key) => {
    return new Promise((resolve, reject) => {
        uni.setStorage({
            key: key,
            success: (res) => {
                resolve(JSON.parse(res.data).data)
            },
            fail: (error) => {
                reject(error)
            }
        });
    })
};
/**
 * 本地存储-> 删除
 * */
const removeStorage = (key) => {
    return new Promise((resolve, reject) => {
        uni.removeStorage({
            key: key,
            success: (res) => {
                resolve(`remove ${key} success,`)
            },
            fail: (error) => {
                reject(error)
            }
        });
    })
};
module.exports = {
    setStorage,
    getStorage,
    removeStorage
};