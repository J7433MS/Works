import multer from 'multer';

// 파일 저장 설정
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        // 파일 이름 설정 (고유 이름 생성 권장)
        callback(null, file.originalname);
    }
});

// Multer 미들웨어
const upload = multer({ storage });

export default upload;
