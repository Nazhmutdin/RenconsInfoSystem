export default async (action, errHandler) => {
    try{
        await action()
    } catch (err) {
        if (errHandler){
            errHandler(err)
        } else{
            console.log(err)
        }
    }
}