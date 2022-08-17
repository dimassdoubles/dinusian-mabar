import { useEffect, useState } from "react"
import Axios from 'axios'
import Row from './row'
import Loading from '../loading'

const Collection = () => {
    const [datas, setDatas] = useState([]) // state awal pake array []
    const [loading, setLoading] = useState(true);

    const url = "https://nodejsherokupadma.herokuapp.com/dinusian"

    useEffect(() => {
        console.log('hello world!')
        Axios({
            method: 'GET',
            url,
        })
        .then((response) => {
          setDatas(response.data['data']['results'])
          setLoading(false);
        //   console.log(datas.length)
        })
    }, [])
    
    return (
        <tbody>
            {loading ? <Loading /> : datas.map( (data, i) => (<Row key={i} dinusian={data} />))}
        </tbody>
    )
}

// buat component row

export default Collection