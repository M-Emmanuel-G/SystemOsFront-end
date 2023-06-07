export const  GenerateData = ()=> {
        const date = new Date();
        const today = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hour = date.getHours()
        const minutes = date.getHours()

        return `${today}/${month}/${year} às ${hour}/${minutes}`
}