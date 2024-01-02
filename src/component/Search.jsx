import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import styled from 'styled-components';


function Search() {
    const [text, setText] = useState('')
    const [visible, setVisible] = useState(false) //인풋창의 기본 속성 값
    const [showClearBtn, setShowClearBtn] = useState('');

     //검색어의 입력 여부를 보기 위해서 만든 상태변수 state
     const [list, setList] = useState(false) //검색리스트가 있는지 여부
     const [menuList, setMenuList] = useState([]); //검색결과 리스트 출력
     const searchRef = useRef();
     
     let data = []; //햄버거메뉴 리스트가 들어올 변수

     const onToggleEvent = (e) =>{
        e.preventDefault();
        setVisible((prev)=>!prev)
     }
     const onClear = (e) =>{
        setText('');
        setShowClearBtn(false)
        setList(false);
        setMenuList([]);
     }
     const inputChange = (e) =>{
        setText(e.target.value)
        setShowClearBtn(e.target.value.trim() !=='')
        setList(true);
        if(e.target.value.trim()){
            fetch(setMenuList());
            setList(true);
        }else{
            setMenuList([]);
            setList(false);
        }
     }
     
     // 엔터키 실행 막기
     const enterPress = (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
        }
     }

     
    return (
        <>
        <SearchForm visible={`${visible}`} className={visible ? 'on' :null} ref={searchRef}>
            <button className='search-btn' onClick={onToggleEvent}><CiSearch /></button>
        {visible &&(
            <input
            type='text'
            value={text}
            placeholder='알레르기 정보를 검색하실 수 있습니다.'
            onChange={inputChange}
            onKeyPress={enterPress}
            >
            </input>
        )}

        {showClearBtn &&(
            <button className='clear-btn' onClick={onClear}><MdClear /></button>
        )}    
        
        </SearchForm>
            
        
        
        
        
        
        </>
    )
}

export default Search

const SearchForm = styled.form`
    display: flex;
    position: fixed;
    top: 50px;
    right: 350px;
    transition: 500ms;
    z-index: 11;
    width: 36px;    
`

/* 
내가 이용 할 경우

ex) 알러지 검색기능
유사사이트 검색해서 참조


*/