import React from 'react'
import styled from 'styled-components'
import brand01 from '../img/brand01.jpg';
import brand02 from '../img/brand02.jpg';

function BrandStory() {
    return (
    <BrandContainer>
        <h1>맥도날드 철학 및 역사</h1>
        <Outbox></Outbox>
        <h2 className="titDep2">맥도날드 기업철학의 뿌리, <br></br>창업주 레이 크록(Ray Kroc)의 이야기</h2>
        <h3 className="txtInfo02">1954년, 맥도날드 형제가 만든 최고의 햄버거를 만나다</h3>
        <p role="text" className="txtInfo">맥도날드 역사는 1954년 레이 크록(Ray Kroc)이 캘리포니아에 있는 한 햄버거 가게를 방문하면서부터 시작되었습니다. 
        밀크 쉐이크 기계 판매원으로 근무하던 크록은 맥도날드 형제가 운영하던 햄버거 가게에서 주문을 받았고 그들에게 감탄했습니다. 
        메뉴는 간단하고 저렴하지만 햄버거의 품질과 맛은 최고였습니다.
        </p>
        <OutBox2></OutBox2>
        <strong>한국 첫 맥도날드 매장, 압구정점 그랜드 오프닝</strong>
        <p className='kor'>맥도날드는 가장 트렌디한 장소로 떠오르는 압구정동에 첫 레스토랑을 열었습니다.
        수백 명의 고객들이 레스토랑 앞에 길게 줄을 늘어서며 맥도날드의 성공적인 시작을
        함께 축하했고 이를 통해 맥도날드가 한국 시장에서 지속적으로 성장할 수 있다는
        잠재력을 보여 주었습니다.
        </p>
        <p className='kor2'>
        맥도날드는 지난 31년 동안 국내 협력 업체와 긴밀하게 일하고, 현재 15,000여명의
        직원이 근무하는 등 한국 사회의 고용 창출에 기여하고 있습니다. 또한, 30여개 이상의
        국내외 비즈니스를 지원해 왔습니다. 맥도날드는 좋은 품질의 제품을 합리적인 가격과
        최상의 서비스 제공을 통해 고객이 가장 선호하는 장소로 거듭나기 위해 지속적으로
        노력할 것입니다.
        </p>
    </BrandContainer>
    )
}

export default BrandStory

const BrandContainer = styled.div`
    width: 1168px;
    margin: 0 auto;
    margin-top: 150px;
    padding: 30px 0 35%;
    h1{
        margin: 0 0px 60px;
        font-size: 22px;
        font-weight: 600;
    }
    h2{
        margin: 0 0 30px;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.3;
    }
    h3{
        font-size: 20px;
        line-height: 1.7;
        font-weight: 600;
    }
    p{
        margin-top: 5px;
        font-size: 16px;
        color: #808080;
        font-weight: 500;
        line-height: 1.9;
    }
    strong{
        float: left;
        font-size: 24px;
        font-weight: 600;
        width: 50%;
        margin-top: 85px;
        padding-left: 50px;
    }
    .kor{
        float: left;
        width: 50%;
        margin-top: 80px;
        padding-left: 50px;
    }
    .kor2{
        float: left;
        width: 50%;
        margin-top: 80px;
        padding-left: 50px;
    }
`
export const Outbox = styled.div`
    width: 1168px;
    height: 400px;
    margin-bottom: 45px;
    background: url(${brand01});
 `
export const OutBox2 = styled.div`
    float: left;
    width: 45%;
    height: 500px;
    margin-top: 80px;
    background: url(${brand02}) no-repeat center / cover;
 `
