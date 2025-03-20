import React, {useRef, useState} from "react";

import "../styles/board.css";

const validateBoardForm = (values) => {
    let formErrors = {};

    // 아이디 검사
    if(!values.userid ){
        formErrors.userid = "아이디를 입력하세요";
    } else if(values.userid.length < 6){
        formErrors.userid = "아이디는 6자 이상 입력하세요";
    }

    if(!values.title ){
        formErrors.title = "글제목을 입력하세요";
    }
    if(!values.contents ){
        formErrors.contents = "본문글을 입력하세요";
    }

    return formErrors;
};

const processBoardok = async (formValues) => {
    fetch('http://localhost:8080/api/board/write', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
    }).then(async response => {
        if (response.ok) {
            alert('게시글 작성이 완료되었습니다!!');
            location.href = '/board/list';
        } else if (response.status === 400) {
            alert(await response.text());
        } else {
            alert('글쓰기 작성이 실패되었습니다.');
        }
    }).catch(error => {
        console.error('join error:', error);
        alert('서버와 통신중 오류가 발생했습니다!! 관리자에게 문의하세요!');
    });

};

const BoardWrite = () => {
    const formBoardRef = useRef(null);
    const [errors, setErrors] = useState([]);

    const handleBoardSubmit = (e) =>{
        e.preventDefault();


        const formData = new FormData(formBoardRef.current);
        const formValues = Object.fromEntries(formData.entries());

        const formErrors = validateBoardForm(formValues);

        if(Object.keys(formErrors).length === 0){
            console.log('입력한 회원 정보 : ',formValues);

            processBoardok(formValues);
        } else{
            setErrors(formErrors);
            console.log('게시판 글쓰기 실패');
        }
    }

    return (
        <main id="content">
            <h2>게시판 글쓰기</h2>
            <form name="boardfrm" id="boardfrm" method="post"
                  ref ={formBoardRef} onSubmit={handleBoardSubmit} noValidate>

                <div className="form-floating my-2">
                    <input type="text" name="userid" id="userid" className={`form-control ${errors.userid ? 'is-invalid' : ''}`}
                           placeholder="아이디"  />
                    <label htmlFor="userid" className="form-label">abc123</label>
                    {errors.userid && <div className="invalid-feedback">{errors.userid}</div>}
                </div>

                <div className="form-floating my-2">
                    <input type="text" name="title" id="title" className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                           placeholder="제목" required />
                    <label htmlFor="title" className="form-label">제목</label>
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>

                <div className="form-floating my-2">
                    <textarea name="contents" id="contents" className={`form-control h-100 ${errors.contents ? 'is-invalid' : ''}`}
                              rows="10" placeholder="본문글" required></textarea>
                    <label htmlFor="contents" className="form-label">본문글</label>
                    {errors.contents && <div className="invalid-feedback">{errors.contents}</div>}
                </div>

                <div className="my-2 d-flex justify-content-center">
                    <div className="g-recaptcha" id="recaptcha" data-sitekey=""></div>
                </div>

                <div className="my-2 d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        <i className="fa-sharp fa-solid fa-file-signature"></i> 입력완료
                    </button>
                    <button type="reset" className="btn btn-danger">
                        <i className="fa-sharp fa-solid fa-eraser"></i> 다시입력
                    </button>
                </div>
            </form>
        </main>
    )
}

export default BoardWrite;