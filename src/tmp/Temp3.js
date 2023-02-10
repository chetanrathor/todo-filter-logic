import React, { useState } from 'react'
import Filter from '../cmp/Filter/Filter';

const Temp3 = () => {
    const[Filter,setFilter] = useState({
        status:'',
        priority:''
    })

    let handelClick = () =>{
        console.log(Filter);
        let items = todos.filter((item)=>{
            console.log('condition',Filter.status);
            if((Filter.status!='')&&(Filter.priority!='')){
                console.log("third");
                return (item.priority== Filter.priority)&&(item.status== Filter.status);
            }
            else if(Filter.status!='') {
                console.log("status",Filter.status);
                return item.status == Filter.status
            }
            else if(Filter.priority!=""){
                return item.priority== Filter.priority;
            }
           
        })
        setData(items)
        console.log(items);
    }

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
    const[data,setData] = useState(todos)
    // console.log(todos);
    return (

        <>
        <div className="container">
            <h1>Priority</h1>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['priority']:'high'
                }})}}>High</button>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['priority']:'low'
                }})}}>low</button>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['priority']:'medium'
                }})}}>medium</button>
            <h1>Status</h1>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['status']:'notstarted'
                }})}}>notstarted</button>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['status']:'inprogress'
                }})}}>inprogress</button>
            <button className="btn-primary" onClick={(e)=>{e.preventDefault();setFilter((prevDate)=>{
                return {
                    ...prevDate,['status']:'complete'
                }})}}>complete</button>
        </div>
        <button className="btn-primary" onClick={(e)=>{
            e.preventDefault()
         handelClick();
        }}>Apply</button>
        <div className='container d-flex flex-row flex-wrap gap-3'>
            {
                data.map((item, index) => {
                    return (
                        <>
                            <div className="card bg-warning"  style={{width: '18rem'}}>
                                {/* <img src="..." className="card-img-top" alt="..."/> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.status}</p>
                                        <p className="card-text">{item.priority}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export default Temp3
