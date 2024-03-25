import { json } from "react-router-dom"

const getitemfromlocal = () =>{
    const datathatstored = localStorage.getItem('appliedjobs')
    if(datathatstored){
        return JSON.parse(datathatstored)
    }
    return []
}

const storetothelocal = ( data ) =>{
    const stringthatshouldstore = JSON.stringify(data)
    localStorage.setItem('appliedjobs', stringthatshouldstore)
}

const setTheItem = ( newdata ) =>{
    const datathatStored = getitemfromlocal();
    const data = [ ...datathatStored, newdata]
    storetothelocal(data)
}
export { getitemfromlocal, setTheItem};