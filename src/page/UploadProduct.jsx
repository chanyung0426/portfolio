import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components';
import { addProducts } from '../api/firebase';
import { CategoryContext } from '../context/CategoryContext';

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
        price : '',
        allergic : '',
    });

    const productInfoChange = (e) =>{
        const {name, value, files} = e.target;
        if(name === 'file' && files &&files[0]){
            setFile(files[0])
        }else{
            setProduct((prev)=>({...prev, [name]:value}))
        }
    }

    const uploadSubmit = async (e) => {
        e.preventDefault();
        try{
            const url = await upLoadImg(file);
            await addProducts(product, url)
            setSuccess('업로드가 완료되었습니다.');
            setTimeout(()=>{
                setSuccess(null);
            },2000);

            setFile(null)

            setProduct({
                title : '',
                price : '',
                allergic : '',
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
                    
                    <input
                    type='text'
                    name='price'
                    placeholder='상품 가격을 입력하세요'
                    value={product.price}
                    onChange={productInfoChange}
                    />
                    {/* 상품가격 */}

                    <input
                    type='text'
                    name='allergic'
                    placeholder='알레르기명을 입력하세요'
                    value={product.allergic}
                    onChange={productInfoChange}
                    />

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
    
`
