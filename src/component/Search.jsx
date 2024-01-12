import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components';
import DetailPageEvent from './DetailPageEvent';
import { searchProducts } from '../api/firebase';



function Search() {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            if(query.trim() === ''){
                setResult([])
            }else{
                try{
                    const txt = await searchProducts(query);
                    setResult(txt);
                }catch(error){
                    console.error(error)
                }
            }
        }
        fetchProducts()
    }, [query])

    const onSearchEvent=(e)=>{
        e.preventDefault()
        setQuery(e.target.value);
    }
    const enterPress = (e)=>{
        if(e.key === 'Enter'){
           e.preventDefault();
        }
    }
     
    return (
      <>
       <SearchForm>
            <button className='search-btn'><CiSearch /></button>
            <input
            type='text'
            value={query}
            placeholder='알레르기 정보를 검색하실 수 있습니다.'
            onChange={onSearchEvent}
            className='searchForms'
            onKeyPress={enterPress}
            />
        </SearchForm>
        
        <List>
            {result.map((product)=>{
                return(
                    <li key={product.id}>
                        <DetailPageEvent key={product.id} product={product}/>
                    </li>
                    )
                })}
        </List>
      </>
       
    )
}


export default Search


const SearchForm = styled.form`
    display: flex;
    position: fixed;
    top: 0px;
    right: 350px;
    transition: 500ms;
    z-index: 11;
    width: 36px;
    .search-btn{
        font-size: 36px;
        display: flex;
        align-items: center;
    }
`

const List = styled.ul`
     width: 100%;
     margin-top: 140px;
     display: flex;
     flex-flow: row wrap;
     gap: 20px;
     justify-content: center;
     align-items: center;
     position: absolute;
     top: 0;
     left: 0;
     overflow: hidden;
     background: #ccc;
     li{
        flex-shrink: 0;
    }
    
`