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
            placeholder='알레르기 정보를 검색하세요.'
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
    right: 265px;
    transition: 500ms;
    width: 36px;
    z-index: 111;
    .search-btn{
        font-size: 36px;
        display: flex;
        align-items: center;
        color: #FFBC0D;
    }
    @media (max-width: 1280px){
       
    }
`

const List = styled.ul`     
     display: flex;
     flex-flow: row wrap;
     gap: 20px;
     justify-content: center;
     align-items: center;
     width: 100%;
     top: 0;
     left: 0;
     margin-top: 50px;
     padding: 140px 0px 5%;
`