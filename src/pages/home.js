import "./home.css"
import {Header} from "../component/header";
export const Home = () =>{


    return (
        <>
            <div id={'display'}>
                <div id={'home-header'}>
                    <Header></Header>
                </div>
                <div id={'content'}>
                    <div id={'main-contents'}>
                        <div id={'hot-comics'}>
                            <div className={'hot-comics-content'}>
                                <img src="/op1.webp" alt=""/>
                                <img src="/thumb-one-piece.jpg" alt=""/>
                            </div>
                            <div className={'hot-comics-content'}>
                                <img src="/op1.webp" alt=""/>
                            </div>
                            <div className={'hot-comics-content'}>
                                <img src="/op1.webp" alt=""/>
                                <img src="/thumb-one-piece.jpg" alt=""/>
                            </div>
                        </div>
                        <div id={'release-calender'}>
                            <span className={'release-time'}>[12:00]</span><span className={'release-name'}>OK con te te</span><br/>
                            <span className={'release-time'}>[13:33]</span><br/>
                            <span className={'release-time'}>[13:33]</span><br/>
                            <span className={'release-time'}>[13:33]</span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}