import "./header.css"
import {useEffect} from "react";

export const Header = () =>{

    useEffect(() =>{
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.popup-content');
        tabs.forEach((tab, index) => {
            tab.addEventListener('mouseover', e => {
                tabs.forEach(tab => tab.classList.remove('active'))
                tab.classList.add('active')
                contents.forEach(content => content.classList.remove('active'))
                contents[index].classList.add('active')
            })
        })
        tabs.forEach((tab, index) => {
            tab.addEventListener('mouseout', e =>{
               contents.forEach(content => content.classList.remove('active'))
            })
        })
    }, [])

    return(
        <>
            <div id={'header'}>
                <div id={'heading'}>
                   <div id={'main-heading'}>
                       <div id={'first-main-heading'}>
                           <div id={'logo'}>
                               QTRANK
                           </div>
                           <div id={'heading-search-bar'}>
                               <input type="text" placeholder={"Tìm kiếm gì đó"}/>
                           </div>
                       </div>
                       <div id={'second-main-heading'}>
                            <button>Sign up</button>
                            <button>Sign in</button>
                       </div>
                   </div>
                </div>
                <div id={'navigate-header'}>
                    <div id={'main-navigate-header'}>
                        <div className={'navigate-items'}>
                            Home
                        </div>
                        <div className={'navigate-items tab'}>
                            Style
                            <div className={'popup-content'}>
                                <div className={'main-popup-content'}>
                                    <table>
                                        <tr>
                                            <td>Action</td>
                                            <td>Adventure</td>
                                            <td>Anime</td>
                                            <td>Isekai</td>
                                            <td>Acient</td>
                                            <td>Comedy</td>
                                            <td>Comic</td>
                                            <td>Demons</td>
                                        </tr>
                                        <tr>
                                            <td>Detective</td>
                                            <td>Doujinshi</td>
                                            <td>Drama</td>
                                            <td>Fantasy</td>
                                            <td>Gender Bender</td>
                                            <td>Harem</td>
                                            <td>Historical</td>
                                            <td>Horror</td>
                                        </tr>
                                        <tr>
                                            <td>Huyền huyễn</td>
                                            <td>Chuyển sinh</td>
                                            <td>Josei</td>
                                            <td>Mafia</td>
                                            <td>Magic</td>
                                            <td>Manhua</td>
                                            <td>Manhwa</td>
                                            <td>Martial Arts</td>
                                        </tr>
                                        <tr>
                                            <td>Military</td>
                                            <td>Mystery</td>
                                            <td>Ngôn tình</td>
                                            <td>One shot</td>
                                            <td>Psychological</td>
                                            <td>Romance</td>
                                            <td>School life</td>
                                            <td>Sci-fi</td>
                                        </tr>
                                        <tr>
                                            <td>Seinen</td>
                                            <td>Shoujo</td>
                                            <td>Shoujo Ai</td>
                                            <td>Shounen</td>
                                            <td>Shounen Ai</td>
                                            <td>Sports</td>
                                            <td>Slice of life</td>
                                            <td>Supernatural</td>
                                        </tr>
                                        <tr>
                                            <td>Tragedy</td>
                                            <td>Trọng sinh</td>
                                            <td>Truyện Màu</td>
                                            <td>Webtoon</td>
                                            <td>Xuyên không</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={'navigate-items tab'}>
                            Rank
                            <div className={'popup-content rank'}>
                                <div className={'main-popup-content'}>
                                    <table>
                                        <tr>
                                            <td>Top Ngày</td>
                                            <td>Top Tuần</td>
                                            <td>Top Tháng</td>
                                            <td>Yêu Thích</td>
                                            <td>Mới cập nhật</td>
                                            <td>Truyện mới</td>
                                            <td>Truyện ngẫu nhiên</td>
                                            <td>Truyện Full</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}