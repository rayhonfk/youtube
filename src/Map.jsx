import React, {useState} from 'react'
import { dat } from '../mock';

function Map() {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("id");
    const [datas, setData] = useState(data);
    const [name, setName] = useState(""); 
    const [address, setAddress] = useState("");
    const [active, setactive] = useState(null);
    const [names, setNames] = useState("");
    const [addresses, setAddresses] = useState("");
    const onSearch = (event) => {
        setSearch(event.target.value);
        let res = datas.filter(val=>`${val[select]}`.toLowerCase().includes(search))
        setData(res)
    }
    const getSelectedval = (e) =>{
        setSelect(e.target.value)
    }
    console.log(select);
    const onDelete =(id) =>{
        let result = datas.filter(val=>val.id !== id)
        setData(result)
    }
    const getValueName = (e) =>{}
}
