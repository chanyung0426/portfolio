import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components';
import { addImages, addProducts } from '../api/firebase';
import { CategoryContext } from '../context/CategoryContext';
import { upLoadimg } from '../api/imgupload';

function UploadProduct() {
    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const fileRef = useRef();
    const {categoryList} = useContext(CategoryContext);
    console.log(categoryList)

    const [product, setProduct] = useState({
        title : '',
        option : '',
        allergic : '',
        category: '',
    });

    const productInfoChange = (e) =>{
        const {name, value, files} = e.target;
        if(name === 'file' && files && files[0]){
            setFile(files[0])
        }else{
            setProduct((prev)=>({...prev, [name]:value}))
        }
    }   

    const uploadSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = await upLoadimg(file);
            await addImages(product, url)
            setSuccess('업로드가 완료되었습니다.');
            setTimeout(()=>{
                setSuccess(null);
            },2000);

            setFile(null)

            setProduct({
                title : '',
                option : '',
                allergic : '',  
                category: '',
            })
            if(fileRef.current){
                fileRef.current.value = '';
            }

        }catch(error){
            console.error(error)
            setError('업로드에 실패했습니다')
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className='container'>
            <FormContainer>
                <div className='imgUploadWrap'>
                    {file && (
                        <img src={URL.createObjectURL(file)}/>
                    )}
                </div>
                <form onSubmit={uploadSubmit}>
                    <input
                    type='file'
                    name='file'
                    accept='image/*'
                    onChange={productInfoChange}
                    ref={fileRef}
                    />
                    {/* 이미지 업로드 */}

                    <input
                    type='text'
                    name='title'
                    placeholder='상품명을 입력하세요'
                    value={product.title}
                    onChange={productInfoChange}
                    />
                    {/* 상품제목 */}
{/*                     
                    <input
                    type='text'
                    name='allergic'
                    placeholder='알레르기명을 입력하세요'
                    value={product.allergic}
                    onChange={productInfoChange}
                    /> */}

                    <select name='category' value={product.category} onChange={productInfoChange}>
                        <option value=''>분류선택</option>
                        {categoryList.map((el, index)=>(
                            <option key={index} value={el}>{el}</option>
                        ))}
                    </select>
                    {/* 상품 분류 */}
              

                <button disabled={isLoading}>
                    {isLoading ? '업로드중' : '제품 등록하기'}
                </button>
                {success &&(
                    <p>{success}</p>
                )}
                {error &&(
                    <p>{error}</p>
                )}
                </form>
            </FormContainer>
            
        </div>
    )
}

export default UploadProduct

const FormContainer = styled.div`
    max-width: 1200px;
    padding: 30px 0px;
    margin: 0px auto;
    margin-top: 200px;
    display: flex;
    gap: 40px;
    .imgUploadWrap{
        max-width: 310px;
        height: 210px;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        gap: 20px;
        input{
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            border-radius: 4px;
            border-color: rgba(0,0,0,0.2);
            padding: 6px 12px;
        }
        button{
            margin-top: auto;
            height: 50px;
            border-radius: 4px;
            background: #ccc;
            border: none;
            transition: 500ms;
            &:hover{
                background:  #FFBC0D;
            }
        }
    }
`
