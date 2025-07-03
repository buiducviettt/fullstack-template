const Course = require('../models/Course');
class CourseController {
  // [GET] /courses
  async index(req, res, next) {
    try {
      const courses = await Course.find().lean(); // ✅ Sử dụng lean() để trả về đối tượng JavaScript thuần túy
      console.log(courses); // ✅ Kiểm tra danh sách courses
      res.render('course', {
        title: 'Đây là Danh sách khóa học tại DucViet Academy',
        courses: courses,
      }); // ✅ Truyền danh sách courses vào view
    } catch (err) {
      console.error(err);
      next(err); // ✅ Đẩy lỗi cho middleware xử lý lỗi
    }
  }
  // [POST] /courses
  async create(req, res, next) {
    try {
      const course = new Course(req.body); // ✅ Nhận dữ liệu từ form hoặc JSON
      await course.save(); // ✅ Lưu vào MongoDB
      res.status(201).json(course); // ✅ Trả JSON về nếu là API
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
