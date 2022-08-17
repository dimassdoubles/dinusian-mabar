import { useEffect, useState } from "react"
import Axios from 'axios'
import MyTable from './my_table'
import Row from './row'

const Collection = () => {
    const [datas, setDatas] = useState([]) // state awal pake array []

    const url = "https://nodejsherokupadma.herokuapp.com/dinusian"

    useEffect(() => {
        console.log('hello world!')
        Axios({
            method: 'GET',
            url,
        })
        .then((response) => {
          setDatas(response.data['data']['results'])
        //   console.log(datas.length)
        })
    }, [])
    
    return (
        <tbody>
            {datas.map( (data, i) => (<Row key={i} dinusian={data} />))}
        </tbody>
    )
}

// buat component row

export default Collection