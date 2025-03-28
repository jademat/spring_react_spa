import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../styles/board.css";

const BoardView = () => {

    const [boardData, setBoardData] = useState({});

    const params = useParams();
    const bno = params.bno;
    const fetchURL = `http://localhost:8080/api/board/view/${bno}`;

    useEffect(() => {
        fetch(fetchURL, {
            headers: {'Accept': 'application/json'}
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setBoardData(data);
            })
            .catch(err => console.log('오류발생', err));
    }, []);


    return (
        <main id="content">
            <h2>게시판 본문글</h2>
            <div className="row offset-1 col-10 my-3">
                <table className="table">
                    <thead>
                    <tr>
                        <td>
                            <button className="btn btn-light" type="button">
                                이전게시물
                            </button>
                            &nbsp;
                            <button className="btn btn-light" type="button">
                                다음게시물
                            </button>
                        </td>
                        <td className="text-end">
                            <button className="btn btn-primary" id="newbdbtn" type="button">
                                새글쓰기
                            </button>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (!boardData.bd) ?
                            <tr>
                                <td colSpan="3">본문글이 없습니다</td>
                            </tr>
                            :
                            <>
                                <tr>
                                    <th className="vtit" colSpan="2">{boardData.bd.title}</th>
                                </tr>
                                <tr>
                                    <td className="vinfo">{boardData.bd.userid}</td>
                                    <td className="text-end vinfo">{boardData.bd.regdate}/{boardData.bd.thumbs}/{boardData.bd.views}</td>
                                </tr>
                                <tr>
                                    <td className="vcont pre" colSpan="2">{boardData.bd.contents}</td>
                                </tr>
                            </>
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>
                            <button className="btn btn-warning" type="button">
                                수정하기
                            </button>
                            &nbsp;
                            <button className="btn btn-danger" id="rmvbdbtn" type="button">
                                삭제하기
                            </button>
                        </td>
                        <td className="text-end">
                            <button className="btn btn-light" id="lstbdbtn" type="button">
                                목록으로
                            </button>
                        </td>
                    </tr>
                    </tfoot>
                </table>

                <div className="my-3">
                    <h3><i className="fa fa-commenting"></i> 나도 한마디</h3>
                </div>

                <table className="table reply-border" data-loginuser="">
                    <tbody>
                    {
                        (boardData.rps) && boardData.rps.map(rp => (
                            (rp.rno === rp.ref) ?
                                <tr key={`reply-${rp.rno}`}>
                                    <td className="text-left">{rp.userid}</td>
                                    <td>
                                        <div className="cmtbg"><span>{rp.regdate}</span>;
                                        <span className="pushend"><a href="#" data-ref="${rp.rno}" data-bs-toggle="modal"data-bs-target="#cmtModal">[추가]</a> [수정] [삭제]</span></div>
                                        <p className="py-1 pre">{rp.comments}</p>
                                    </td>
                                </tr>
                                :
                                ''
                        ))

                    }
                    </tbody>
                </table>


            </div>
        </main>
    )
}

export default BoardView;