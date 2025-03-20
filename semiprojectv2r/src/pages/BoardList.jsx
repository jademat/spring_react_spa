import React from "react";

import "../styles/board.css";
// Main 함수 컴포넌트 정의
const BoardList = () => {

    const goBoardWrite = () => {
        location.href= '/board/write';
    };

    return (
        <main id="content">
            <h2>게시판</h2>
            <table className="table table-striped">
                <colgroup>
                    <col style={{width: "7%"}}/>
                    <col className="truncate"/>
                    <col style={{width: "12%"}}/>
                    <col style={{width: "12%"}}/>
                    <col style={{width: "7%"}}/>
                    <col style={{width: "7%"}}/>
                </colgroup>

                <thead>
                <tr>
                    <td colSpan="3" className="text-start">
                        <div className="d-flex align-items-center gap-3">
                            <select className="form-select" style={{width: "120px"}} id="findtype" name="findtype"
                                    defaultValue="title">
                                <option value="title" >제목</option>
                                <option value="userid">작성자</option>
                                <option value="contents">내용</option>
                            </select>
                            <input className="form-control" style={{width: "250px"}} id="findkey" name="findkey"/>
                            <button className="btn btn-success" id="findbtn"><i
                                className="fa-solid fa-magnifying-glass"/> 검색
                            </button>
                        </div>
                    </td>
                    <td colSpan="3" className="text-end">
                        <button type="button" className="btn btn-primary" id="newbdbtn"
                        onClick={goBoardWrite}><i className="fas fa-pen"/> 글쓰기
                        </button>
                    </td>
                </tr>
                <tr className="table-light">
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>추천</th>
                    <th>조회</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>3939</td>
                    <td><a href="/board/view?bno=3939">fdsfasd</a> </td>
                    <td>abc123</td>
                    <td>2025-03-05</td>
                    <td>0</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>3938</td>
                    <td><a href="/board/view?bno=3938">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>53</td>
                </tr>
                <tr>
                    <td>3937</td>
                    <td><a href="/board/view?bno=3937">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>3936</td>
                    <td><a href="/board/view?bno=3936">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>3935</td>
                    <td><a href="/board/view?bno=3935">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3934</td>
                    <td><a href="/board/view?bno=3934">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3933</td>
                    <td><a href="/board/view?bno=3933">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3932</td>
                    <td><a href="/board/view?bno=3932">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3931</td>
                    <td><a href="/board/view?bno=3931">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3930</td>
                    <td><a href="/board/view?bno=3930">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3929</td>
                    <td><a href="/board/view?bno=3929">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3928</td>
                    <td><a href="/board/view?bno=3928">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3927</td>
                    <td><a href="/board/view?bno=3927">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3926</td>
                    <td><a href="/board/view?bno=3926">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3925</td>
                    <td><a href="/board/view?bno=3925">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3924</td>
                    <td><a href="/board/view?bno=3924">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3923</td>
                    <td><a href="/board/view?bno=3923">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3922</td>
                    <td><a href="/board/view?bno=3922">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3921</td>
                    <td><a href="/board/view?bno=3921">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3920</td>
                    <td><a href="/board/view?bno=3920">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3919</td>
                    <td><a href="/board/view?bno=3919">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3918</td>
                    <td><a href="/board/view?bno=3918">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3917</td>
                    <td><a href="/board/view?bno=3917">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3916</td>
                    <td><a href="/board/view?bno=3916">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3915</td>
                    <td><a href="/board/view?bno=3915">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3914</td>
                    <td><a href="/board/view?bno=3914">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3913</td>
                    <td><a href="/board/view?bno=3913">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3912</td>
                    <td><a href="/board/view?bno=3912">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3911</td>
                    <td><a href="/board/view?bno=3911">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3910</td>
                    <td><a href="/board/view?bno=3910">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3909</td>
                    <td><a href="/board/view?bno=3909">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3908</td>
                    <td><a href="/board/view?bno=3908">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3907</td>
                    <td><a href="/board/view?bno=3907">&quot;아빠, 곧 나오는데 참고하라고&quot;… 닌텐도 스위치2 출시 윤곽</a> </td>
                    <td>987xyz</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3906</td>
                    <td><a href="/board/view?bno=3906">다이소 결국 일냈다…“3만원→3천원 영양제 품절사태” 발칵 뒤집힌 약국</a> </td>
                    <td>abc123</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3905</td>
                    <td><a href="/board/view?bno=3905">AMD, 차세대 RDNA 4 기반 라데온 RX 9000 공개…‘AI 게이밍 진화’</a> </td>
                    <td>냐옹냐옹</td>
                    <td>2025-03-04</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colSpan="6">
                        <ul className="pagination">
                            <li className="page-item" ><a  className="page-link">이전</a></li>
                                <li> <a href="#" className="page-link">1</a></li>
                                <li> <a href="#" className="page-link">2</a></li>
                                <li> <a href="#" className="page-link">3</a></li>
                                <li> <a href="#" className="page-link">4</a></li>
                                <li> <a href="#" className="page-link">5</a></li>
                                <li> <a href="#" className="page-link">6</a></li>
                                <li> <a href="#" className="page-link">7</a></li>
                                <li> <a href="#" className="page-link">8</a></li>
                                <li> <a href="#" className="page-link">9</a></li>
                                <li> <a href="#" className="page-link">10</a></li>
                            <li className="page-item" ><a className="page-link">다음</a></li>
                        </ul>
                    </td>
                </tr>
                </tfoot>
            </table>
        </main>
    )
}

export default BoardList;