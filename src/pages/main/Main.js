import "./Main.css"
import {Carousel} from '@trendyol-js/react-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from "react-router-dom";

export default function Main() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    return (
        <div className={"main"}>
            {/*<div id={'home-header'}>*/}
            {/*    <Header></Header>*/}
            {/*</div>*/}
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

                    </div>
                    <div id={'cool-stuffs'}>
                        <span id={'cool-h3'}>Truyện Hay</span>
                        <Carousel
                            show={6}
                            useArrowKeys={false}
                            infinite={true}
                            swiping={true}
                            // autoSwipe={6}
                            transition={1.5}
                            leftArrow={<ArrowBackIosNewIcon className={'arrows'}></ArrowBackIosNewIcon>}
                            rightArrow={<ArrowForwardIosIcon className={'arrows'}></ArrowForwardIosIcon>}
                            className={'carousel-cool'}
                        >
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                            <div className={'comics'}>
                                <div className={'comics-picture'}>
                                    <img src="/op1.webp" alt=""/>
                                </div>
                                <div className={'comics-name'}>
                                    <h4>One Piece</h4>
                                    <span>One Piece</span>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div> <Link to={"/truyen-moi-cap-nhat"}> Xem nhieu truyen hon </Link></div>
            <div> <Link to={"/ten-truyen"}> Xem truyen </Link></div>
        </div>
    )
}