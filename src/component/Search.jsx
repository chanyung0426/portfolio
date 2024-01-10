import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components';
import DetailPageEvent from './DetailPageEvent';
import { query } from 'firebase/database';
import { searchProducts } from '../api/firebase';



function Search() {
    const searchRef = useRef();
    //  
    const [visible, setVisible] = useState(false) //인풋창의 기본 속성 값

    // const [list, setList] = useState('')
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            if(query.trim() === ''){
                setResult([])
            }else{
                try{
                    const txt = await searchProducts(query)
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
    
     const onToggleEvent = (e) =>{
        e.preventDefault();
        setVisible((prev)=>!prev)
     }
     
    //  // 엔터키 실행 막기
    //  const enterPress = (e) =>{
    //     if(e.key === 'Enter'){
    //         e.preventDefault();
    //     }
    //  }

     
    return (
        <>
        <SearchForm visible={`${visible}`} className={visible ? 'on' :null} ref={searchRef}>
            <button className='search-btn' onClick={onToggleEvent}><CiSearch /></button>
        {visible &&(
            <input
            type='text'
            value={query}
            placeholder='알레르기 정보를 검색하실 수 있습니다.'
            onChange={onSearchEvent}
            //onKeyPress={enterPress}
            className='searchForm'
            />
        )}
            <ul className='productList'>
                {result.map((product)=>{
                    <li>
                        <DetailPageEvent key={product.id} product={product}/>
                    </li>
                })}
            </ul>
        
        </SearchForm>

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
    .clear-btn{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 24px;
        display: flex;
        align-items: center;
    }
`