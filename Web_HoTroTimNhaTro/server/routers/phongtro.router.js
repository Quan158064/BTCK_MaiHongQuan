var express = require("express");
var router = express.Router();
var controller = require("../controllers/phongtro.controller");
var cors = require("cors");
var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

//################__Đăng tin mới_Address___####################
router.post("/dang-tin-moi/chon-tinhTP", controller.citys);
router.get(
  "/dang-tin-moi/danh-sach-duong/:code_city",
  controller.StreetstoCitys
);
router.post("/dang-tin-moi/chon-QH",cors(corsOptions), controller.districts);
router.post("/dang-tin-moi/chon-Duong",cors(corsOptions), controller.streets);

//#########__Đăng tin upload_Image___##############
router.post(
  "/dang-tin-moi/upload_image",
  cors(corsOptions),
  controller.UploadAvarta
);
router.get("/open_image/nameimage=:imagename",cors(corsOptions), controller.getImageAvarta);
router.post("/dang-tin-moi/xoa-anh-dai-dien",cors(corsOptions), controller.DeleteImageAvarta);

router.post("/dang-tin-moi/up-load_hinh-mo-ta",cors(corsOptions), controller.UploadImageInfor);
router.post("/dang-tin-moi/xoa-anh-mo-ta",cors(corsOptions), controller.DeleteImageInfor);

//#########__Đăng tin mới_Finish___##############
router.post("/dang-tin-moi/phong-tro",cors(corsOptions), controller.PostNewsPT);
router.post("/dang-tin-moi/nha-tro",cors(corsOptions), controller.PostNewsNT);
router.post("/dang-tin-moi/can-ho",cors(corsOptions), controller.PostNewsCH);

//################__Phong_Tro___####################

router.get("/quan-ly-tin-dang/phong-tro",cors(corsOptions), controller.PostManagerPT);
router.get("/quan-ly-tin-dang/nha-tro",cors(corsOptions), controller.PostManagerNT);
router.get("/quan-ly-tin-dang/can-ho",cors(corsOptions), controller.PostManagerCH);
router.post(
  "/quan-ly-tin-dang/an-tin-tuc-phong-tro",cors(corsOptions),
  controller.PostManagerHiddenNewsPT
);
router.post(
  "/quan-ly-tin-dang/hien-tin-tuc-phong-tro",cors(corsOptions),
  controller.PostManagerShowNewsPT
);
router.post(
  "/quan-ly-tin-dang/an-tin-tuc-nha-tro",
  controller.PostManagerHiddenNewsNT
);
router.post(
  "/quan-ly-tin-dang/hien-tin-tuc-nha-tro",
  controller.PostManagerShowNewsNT
);
router.post(
  "/quan-ly-tin-dang/an-tin-tuc-can-ho",
  controller.PostManagerHiddenNewsCH
);
router.post(
  "/quan-ly-tin-dang/hien-tin-tuc-can-ho",
  controller.PostManagerShowNewsCH
);
module.exports = router;
