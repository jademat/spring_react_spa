import React from "react";

// Main 함수 컴포넌트 정의
const GalleryList = () => {
    return (
        <main id="content">
            <h2><i className="fa-solid fa-image" /> 이미지 갤러리</h2>

            <div className="row mt-5 mb-3">
                <div className="row offset-1 col-7">
                    <div className="col-3">
                        <select className="form-select" id="findtype">
                            <option value="title">제목</option>
                            <option value="userid">아이디</option>
                            <option value="name">글쓴이</option>
                            <option value="contents">내용</option>
                            <option value="titcont">제목+내용</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control col-2" id="findkey"/>
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-light" id="findbtn">
                            <i className="fa-solid fa-magnifying-glass" /> 검색하기
                        </button>
                    </div>
                </div>
                <div className="col-3 text-end">
                    <button type="button" className="btn btn-light" id="newgalbtn">
                        <i className="fa fa-plus-circle"></i> 새글쓰기
                    </button>
                </div>
            </div>

            <div className="row justify-content-center mb-4">

                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>
                <div className="col-10 card" style={{width: "18rem"}}>
                    <a href = "#"><img className="card-img-top" alt="..."/></a>

                    <div className="card-body">
                        <h5 className="card-title" >갤러리 제목</h5>
                        <p><span >작성자</span>
                            <span style={{float: "right"}}>2023-07-20</span></p>
                        <p><span><i className="fa-regular fa-thumbs-up" /> </span>
                            <span style={{float: "right"}}>
                            <i className="fa-regular fa-eye" /></span></p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default GalleryList;