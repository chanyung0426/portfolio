import React from 'react'
import styled from 'styled-components'

function Inquiry() {
    return (
       <InquiryContainer>
       <h2 class='titDep3'>토지 임대 및 매매</h2>
       <table className='tableType01'>
        <caption>토지 임대 및 매매 - 임차조건, 면적 안내표</caption>
        <colgroup>
         <col>
         </col>
        </colgroup>
        <tbody>
            <tr>
                <th scope='row'>임차조건</th>
                <td class="tleft">
                    <ul class='list'>
                        <li>안정적이고 지속적인 주거 인구 증가 지역</li>
                        <li>차량의 진 출입 및 접근성이 좋은 위치</li>
                        <li>도로변에 위치하여 가시성이 좋은 입지</li>
                        <li>교통 통행량이 많은 지역</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope='row'>면적</th>
                <td class="tleft">
                    <ul class='list'>
                        <li>서울 - 최소 200평 이상 대지 면적</li>
                        <li>경기도 및 광역시 - 최소 300평 이상 대지 면적</li>
                        <li>그 외의 지역 - 최소 400평 이상 대지 면적</li>
                    </ul>
                </td>
            </tr>
        </tbody>
        </table>
       <h2 class='titDep3'>건물 임대</h2>
       <table className='tableType01'>
        <caption>건물 임대 안내표</caption>
        <colgroup>
         <col>
         </col>
        </colgroup>
        <tbody>
            <tr>
                <th scope='row'>임차조건</th>
                <td class="tleft">
                    <ul class='list'>
                        <li>유동인구가 풍부한 지역 (역세권, 사무실 및 아파트 밀집 지역 등)</li>
                        <li>서울/경기도 지역</li>
                        <li>6대 광역시</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope='row'>면적</th>
                <td class="tleft">
                    <ul class='list'>
                        <li>전용으로 1층이 80평 이상의 면적 (20평은 창고, 휴게실 공간으로 지하/윗층으로 이동 될 수 있음)</li>
                        <li>1,2층일 경우, 각 층이 40평 이상의 면적</li>
                        <li>중심 상업지구라면 1층 40평 이하일 때, 2층은 60평 이상의 면적</li>
                    </ul>
                </td>
            </tr>
        </tbody>
        </table>
    
       </InquiryContainer>
    )
}

export default Inquiry

const InquiryContainer = styled.div`
    width: 1168px;
    height: 1000px;
    margin: 0 auto;
    margin-top: 150px;
    color: #808080;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.9;
    padding: 30px 0 5%;
    .titDep3{
        display: block;
        color: #292929;
        margin: 100px 0 30px;
        font-size: 30px;
        line-height: 1;
        font-weight: 500;
    }
    .tableType01{
        border-top: 2px solid #292929;
        border-bottom: 1px solid #292929;
    }

    table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
    }
    caption{
        overflow: hidden;
        margin-left: -9999px;
        width: 1px;
        height: 1px;
        font-size: 1px;
        line-height: 0;
    }
    col{
        width: 15%;
    }
    tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .tableType01 th[scope="row"]{
        text-align: left;
        border-right: 1px solid #292929;
    }
    
    .tableType01 th{
        padding: 25px 12px;
        color: #292929;
        font-weight: 500;
        border-top: 1px solid #d1d1d1;
    }
   
    .tableType01 td.tleft{
        padding-left: 40px;
    }
    
    .tableType01 td{
        padding: 25px;
        vertical-align: top;
        border-top: 1px solid #d1d1d1;
    }

    .tleft{
        text-align: left!important;
    }
   
    .titDep3{
        display: block;
        color: #292929;
        margin: 100px 0 30px;
        font-size: 30px;
        line-height: 1;
    } 
`
