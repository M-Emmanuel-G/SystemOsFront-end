export const  GenerateData = ()=> {
        const date = new Date();

        const day = date.getDay()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
}