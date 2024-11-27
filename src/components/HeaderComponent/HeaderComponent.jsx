import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../ButtonComponent/ButtonComponent'
import SubMenu from '../SubMenu/SubMenu';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { useTranslation } from 'react-i18next';
import { ModelChoiceLanguage } from '../Models/ModelChoiceLanguage';
import { BoxContent } from '../BoxContent/BoxContent';
import { BoxCartCourse } from '../BoxContent/BoxCartCourse';
const HeaderComponent = ({isOpenMoDel,setIsOpenModel}) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered,setIsHovered] = useState("");
    const [categories, setCategories] = useState({
        level1: [],
        level2: [],
        level3: []
    });
    const fectCategoti = async()=>{
        const res1 = {
            data:[
                {id: 1, name: 'Phát triển', level: 1, categoryId: null},
                {id: 3, name: 'Kinh doanh', level: 1, categoryId: null},
                {id: 4, name: 'Tài chính & Kế toán', level: 1, categoryId: null},
                {id: 5, name: 'CNTT & Phần mềm', level: 1, categoryId: null},
                {id: 6, name: 'Năng suất văn phòng', level: 1, categoryId: null},
                {id: 7, name: 'Phát triển cá nhân', level: 1, categoryId: null},
                {id: 8, name: 'Thiết kế', level: 1, categoryId: null},
                {id: 9, name: 'Marketing', level: 1, categoryId: null},
                {id: 10, name: 'Phong cách sống', level: 1, categoryId: null},
                {id: 11, name: 'Nhiếp ảnh & Video', level: 1, categoryId: null},
                {id: 12, name: 'Sức khỏe & Thể dục', level: 1, categoryId: null},
                {id: 13, name: 'Âm nhạc', level: 1, categoryId: null},
                {id: 14, name: 'Giảng dạy & Học thuật', level: 1, categoryId: null},
            ],
            message: "Get all categories by level information successfully",
            status: 200
        }
        const res2 = {
            data:[
                {id: 15, name: 'Phát triển Web', level: 2, categoryId: 1},
            {id: 16, name: 'Khoa học dữ liệu', level: 2, categoryId: 1},
            {id: 17, name: 'Phát triển ứng dụng di động', level: 2, categoryId: 1},
            {id: 18, name: 'Ngôn ngữ lập trình', level: 2, categoryId: 1},
            {id: 19, name: 'Phát triển trò chơi', level: 2, categoryId: 1},
            {id: 20, name: 'Thiết kế & Phát triển cơ sở dữ liệu', level: 2, categoryId: 1},
            {id: 21, name: 'Kiểm tra phần mềm', level: 2, categoryId: 1},
            {id: 22, name: 'Kỹ thuật phần mềm', level: 2, categoryId: 1},
            {id: 23, name: 'Công cụ phát triển phần mềm', level: 2, categoryId: 1},
            {id: 24, name: 'Viết phần mềm không cần biết lập trình', level: 2, categoryId: 1},
            {id: 25, name: 'Tinh thần khởi nghiệp', level: 2, categoryId: 3},
            {id: 26, name: 'Giao tiếp', level: 2, categoryId: 3},
            {id: 27, name: 'Quản lý', level: 2, categoryId: 3},
            {id: 28, name: 'Bán hàng', level: 2, categoryId: 3},
            {id: 29, name: 'Chiến lược kinh doanh', level: 2, categoryId: 3},
            {id: 30, name: 'Hoạt động', level: 2, categoryId: 3},
            {id: 31, name: 'Quản lý dự án', level: 2, categoryId: 3},
            {id: 32, name: 'Luật doanh nghiệp', level: 2, categoryId: 3},
            {id: 33, name: 'BI và phân tích dữ liệu kinh doanh', level: 2, categoryId: 3},
            {id: 34, name: 'Nhân sự', level: 2, categoryId: 3},
            {id: 35, name: 'Ngành công nghiệp', level: 2, categoryId: 3},
            {id: 36, name: 'Thương mại điện tử', level: 2, categoryId: 3},
            {id: 37, name: 'Truyền thông', level: 2, categoryId: 3},
            {id: 38, name: 'Bất động sản', level: 2, categoryId: 3},
            {id: 39, name: 'Kinh doanh khác', level: 2, categoryId: 3},
            {id: 40, name: 'Kế toán và ghi sổ sách kế toán', level: 2, categoryId: 4},
            {id: 41, name: 'Tuân thủ', level: 2, categoryId: 4},
            {id: 42, name: 'Tiền ảo & Blockchain', level: 2, categoryId: 4},
            {id: 43, name: 'Kinh tế học', level: 2, categoryId: 4},
            {id: 44, name: 'Tài chính', level: 2, categoryId: 4},
            {id: 45, name: 'Luyện thi và lấy chứng chỉ tài chính', level: 2, categoryId: 4},
            {id: 46, name: 'Xây dựng mô hình tài chính & phân tích', level: 2, categoryId: 4},
            {id: 47, name: 'Đầu tư và giao dịch', level: 2, categoryId: 4},
            {id: 48, name: 'Công cụ quản lý tiền', level: 2, categoryId: 4},
            {id: 49, name: 'Thuế', level: 2, categoryId: 4},
            {id: 50, name: 'Tài chính và kế toán khác', level: 2, categoryId: 4},
            {id: 51, name: 'Chứng chỉ CNTT', level: 2, categoryId: 5},
            {id: 52, name: 'Mạng & Bảo mật', level: 2, categoryId: 5},
            {id: 53, name: 'Phần cứng', level: 2, categoryId: 5},
            {id: 54, name: 'Hệ điều hành & Máy chủ', level: 2, categoryId: 5},
            {id: 55, name: 'CNTT & Phần mềm khác', level: 2, categoryId: 5},
            {id: 56, name: 'Microsoft', level: 2, categoryId: 6},
            {id: 57, name: 'Apple', level: 2, categoryId: 6},
            {id: 58, name: 'Google', level: 2, categoryId: 6},
            {id: 59, name: 'SAP', level: 2, categoryId: 6},
            {id: 60, name: 'Oracle', level: 2, categoryId: 6},
            {id: 61, name: 'Năng suất văn phòng khác', level: 2, categoryId: 6},
            {id: 62, name: 'Chuyển hóa bản thân', level: 2, categoryId: 7},
            {id: 63, name: 'Năng suất cá nhân', level: 2, categoryId: 7},
            {id: 64, name: 'Năng lực lãnh đạo', level: 2, categoryId: 7},
            {id: 65, name: 'Phát triển sự nghiệp', level: 2, categoryId: 7},
            {id: 66, name: 'Làm cha mẹ & Mối quan hệ', level: 2, categoryId: 7},
            {id: 67, name: 'Hạnh phúc', level: 2, categoryId: 7},
            {id: 68, name: 'Các phương pháp bí truyền', level: 2, categoryId: 7},
            {id: 69, name: 'Tôn giáo & Tâm linh', level: 2, categoryId: 7},
            {id: 70, name: 'Xây dựng thương hiệu cá nhân', level: 2, categoryId: 7},
            {id: 71, name: 'Khả năng sáng tạo', level: 2, categoryId: 7},
            {id: 72, name: 'Gây ảnh hưởng', level: 2, categoryId: 7},
            {id: 73, name: 'Lòng tự tôn & Sự tự tin', level: 2, categoryId: 7},
            {id: 74, name: 'Quản lý căng thẳng', level: 2, categoryId: 7},
            {id: 75, name: 'Kỹ năng học tập và ghi nhớ', level: 2, categoryId: 7},
            {id: 76, name: 'Động lực', level: 2, categoryId: 7},
            {id: 77, name: 'Phát triển cá nhân khác', level: 2, categoryId: 7},
            {id: 78, name: 'Thiết kế Web', level: 2, categoryId: 8},
            {id: 79, name: 'Thiết kế & Minh họa đồ họa', level: 2, categoryId: 8},
            {id: 80, name: 'Công cụ thiết kế', level: 2, categoryId: 8},
            {id: 81, name: 'Thiết kế trải nghiệm người dùng', level: 2, categoryId: 8},
            {id: 82, name: 'Thiết kế trò chơi', level: 2, categoryId: 8},
            {id: 83, name: '3D & Hoạt hình', level: 2, categoryId: 8},
            {id: 84, name: 'Thiết kế thời trang', level: 2, categoryId: 8},
            {id: 85, name: 'Thiết kế kiến trúc', level: 2, categoryId: 8},
            {id: 86, name: 'Thiết kế nội thất', level: 2, categoryId: 8},
            {id: 87, name: 'Thiết kế khác', level: 2, categoryId: 8},
            {id: 88, name: 'Marketing kỹ thuật số', level: 2, categoryId: 9},
            {id: 89, name: 'SEO', level: 2, categoryId: 9},
            {id: 90, name: 'Marketing trên mạng xã hội', level: 2, categoryId: 9},
            {id: 91, name: 'Xây dựng thương hiệu', level: 2, categoryId: 9},
            {id: 92, name: 'Nguyên tắc cơ bản về marketing', level: 2, categoryId: 9},
            {id: 93, name: 'Phân tích và tự động hóa marketing', level: 2, categoryId: 9},
            {id: 94, name: 'Quan hệ công chúng', level: 2, categoryId: 9},
            {id: 95, name: 'Quảng cáo có trả phí', level: 2, categoryId: 9},
            {id: 96, name: 'Marketing qua video và trên thiết bị di động', level: 2, categoryId: 9},
            {id: 97, name: 'Marketing qua nội dung', level: 2, categoryId: 9},
            {id: 98, name: 'Hack tăng trưởng', level: 2, categoryId: 9},
            {id: 99, name: 'Marketing liên kết', level: 2, categoryId: 9},
            {id: 100, name: 'Marketing sản phẩm', level: 2, categoryId: 9},
            {id: 101, name: 'Marketing khác', level: 2, categoryId: 9},
            {id: 102, name: 'Nghệ thuật & Đồ thủ công', level: 2, categoryId: 10},
            {id: 103, name: 'Làm đẹp & Trang điểm', level: 2, categoryId: 10},
            {id: 104, name: 'Thực phẩm & Đồ uống', level: 2, categoryId: 10},
            {id: 105, name: 'Chơi game', level: 2, categoryId: 10},
            {id: 106, name: 'Cải tạo nhà & Huấn luyện thú cưng', level: 2, categoryId: 10},
            {id: 107, name: 'Du lịch', level: 2, categoryId: 10},
            {id: 108, name: 'Phong các sống khác', level: 2, categoryId: 10},
            {id: 109, name: 'Nhiếp ảnh kỹ thuật số', level: 2, categoryId: 11},
            {id: 110, name: 'Nhiếp ảnh', level: 2, categoryId: 11},
            {id: 111, name: 'Nghệ thuật chụp ảnh chân dung', level: 2, categoryId: 11},
            {id: 112, name: 'Công cụ nhiếp ảnh', level: 2, categoryId: 11},
            {id: 113, name: 'Nhiếp ảnh thương mại', level: 2, categoryId: 11},
            {id: 114, name: 'Thiết kế video', level: 2, categoryId: 11},
            {id: 115, name: 'Nhiếp ảnh & Video khác', level: 2, categoryId: 11},
            {id: 116, name: 'Thể dục', level: 2, categoryId: 12},
            {id: 117, name: 'Sức khỏe tổng quát', level: 2, categoryId: 12},
            {id: 118, name: 'Thể thao', level: 2, categoryId: 12},
            {id: 119, name: 'Dinh dưỡng & Ăn kiêng', level: 2, categoryId: 12},
            {id: 120, name: 'Yoga', level: 2, categoryId: 12},
            {id: 121, name: 'Sức khỏe tinh thần', level: 2, categoryId: 12},
            {id: 122, name: 'Võ thuật & Tự vệ', level: 2, categoryId: 12},
            {id: 123, name: 'An toàn & Sơ cứu', level: 2, categoryId: 12},
            {id: 124, name: 'Khiêu vũ', level: 2, categoryId: 12},
            {id: 125, name: 'Thiền định', level: 2, categoryId: 12},
            {id: 126, name: 'Sức khỏe & Thể dục khác', level: 2, categoryId: 12},
            {id: 127, name: 'Nhạc cụ', level: 2, categoryId: 13},
            {id: 128, name: 'Sản xuất nhạc', level: 2, categoryId: 13},
            {id: 129, name: 'Nguyên tắc cơ bản về âm nhạc', level: 2, categoryId: 13},
            {id: 130, name: 'Thanh nhạc', level: 2, categoryId: 13},
            {id: 131, name: 'Kỹ thuật âm nhạc', level: 2, categoryId: 13},
            {id: 132, name: 'Phần mềm âm nhạc', level: 2, categoryId: 13},
            {id: 133, name: 'Âm nhạc khác', level: 2, categoryId: 13},
            {id: 134, name: 'Kỹ thuật', level: 2, categoryId: 14},
            {id: 135, name: 'Nhân văn', level: 2, categoryId: 14},
            {id: 136, name: 'Toán học', level: 2, categoryId: 14},
            {id: 137, name: 'Khoa học', level: 2, categoryId: 14},
            {id: 138, name: 'Giáo dục online', level: 2, categoryId: 14},
            {id: 139, name: 'Khoa học xã hội', level: 2, categoryId: 14},
            {id: 140, name: 'Học ngôn ngữ', level: 2, categoryId: 14},
            {id: 141, name: 'Đào tạo giảng viên', level: 2, categoryId: 14},
            {id: 142, name: 'Luyện thi', level: 2, categoryId: 14},
            {id: 143, name: 'Giảng dạy & học thuật khác', level: 2, categoryId: 14}
            ],
            message: "Get all categories by level information successfully",
            status: 200
        }
        const res3 = {
            data:[
                {id: 144, name: 'JavaScript', level: 3, categoryId: 15}, 
                {id: 145, name: 'React JS', level: 3, categoryId: 15}, 
                {id: 146, name: 'Angular', level: 3, categoryId: 15}, 
                {id: 147, name: 'CSS', level: 3, categoryId: 15}, 
                {id: 148, name: 'Next.js', level: 3, categoryId: 15}, 
                {id: 149, name: 'HTML', level: 3, categoryId: 15}, 
                {id: 150, name: 'ASP.NET Core', level: 3, categoryId: 15}, 
                {id: 151, name: 'Node.Js', level: 3, categoryId: 15}, 
                {id: 152, name: 'Spring framework', level: 3, categoryId: 15}, 
                {id: 153, name: 'Học máy', level: 3, categoryId: 16}, 
                {id: 154, name: 'Python', level: 3, categoryId: 16}, 
                {id: 155, name: 'Trí tuệ nhân tạo (AI)', level: 3, categoryId: 16}, 
                {id: 156, name: 'Học sâu', level: 3, categoryId: 16}, 
                {id: 157, name: 'AI tạo sinh (GenAI)', level: 3, categoryId: 16}, 
                {id: 158, name: 'LangChain', level: 3, categoryId: 16}, 
                {id: 159, name: 'Xử lý ngôn ngữ tự nhiên (NLP)', level: 3, categoryId: 16}, 
                {id: 160, name: 'R (ngôn ngữ lập trình)', level: 3, categoryId: 16}, 
                {id: 161, name: 'Google Flutter', level: 3, categoryId: 17}, 
                {id: 162, name: 'Phát triển ứng dụng cho IOS', level: 3, categoryId: 17}, 
                {id: 163, name: 'Phát triển Android', level: 3, categoryId: 17}, 
                {id: 164, name: 'React Native', level: 3, categoryId: 17}, 
                {id: 165, name: 'Dart (ngôn ngữ lập trình)', level: 3, categoryId: 17}, 
                {id: 166, name: 'Swift', level: 3, categoryId: 17}, 
                {id: 167, name: 'Kotlin', level: 3, categoryId: 17}, 
                {id: 168, name: 'Phát triển ứng dụng moblie', level: 3, categoryId: 17}, 
                {id: 169, name: 'SwiftUI', level: 3, categoryId: 17}, 
                ],
            message:"Get all categories by level information successfully",
            status: 200
        }
        if (res1?.status === 200 && res2?.status === 200 && res3?.status === 200) {
            const updatedCategories = {
                level1: res1.data,
                level2: res2.data,
                level3: res3.data 
            };

            setCategories(updatedCategories);
        }
    }
    const handleMouseOver = (e) => {
        setIsHovered(e);
      };
    
      const handleMouseLeave = () => {
        setIsHovered("");
      };
    useEffect(() => {
        fectCategoti();
        if (isOpen || isOpenMoDel) {
        document.body.style.overflow = 'hidden';
            } else {
            document.body.style.overflow = '';
        }

        return () => {
        document.body.style.overflow = '';
        };
    }, [isOpen,isOpenMoDel]);
  return (
    <div className="flex items-center h-[72px] px-6 relative z-10 shadow-md shadow-[#00000059] tabletXs:justify-between">
        <ModelChoiceLanguage isOpenMoDel={isOpenMoDel} setIsOpenModel={setIsOpenModel}/>
        <button data-collapse-toggle="navbar-default" onClick={()=>setIsOpen(true)} className=" hidden tabletXs:block">
            <svg fill="#000000" width="45px" height="45px" viewBox="-8 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>{t('Thể loại')}</title>
                <path d="M15.4 12.6h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84 0.040 0.44-0.36 0.84-0.8 0.84zM15.4 16.84h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84zM15.4 21.080h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84z"></path>
            </svg>
        </button>
        <SubMenu categories={categories} setIsOpen={setIsOpen} isOpen={isOpen}/>
        <Link to="/" className='pr-2'><img src="/assets/logos/logo.png" className='w-[91px] tablet:w-[75px]' alt="" /></Link>
        <div className='relative h-full flex items-center tabletXs:hidden' onMouseOver={()=>handleMouseOver(t('Thể loại'))} onMouseLeave={()=>handleMouseLeave()}>
            <li className={`cursor-pointer ${isHovered===t('Thể loại') ? 'text-eighth' : ''}`} >
                {t('Thể loại')}
            </li>
            <div className={`${isHovered===t('Thể loại')?"block": "hidden"} absolute top-full z-0 `}>
                <DropDownMenu categories={categories}/>
            </div>
        </div>
        <form className="grow px-3 tabletXs:hidden">   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#080341"/>
                    </svg>
                </div>
                <input type="search" className="block w-full h-12 ps-10 text-sm text-gray-900 border border-black rounded-full bg-third focus:border-black focus:ring-0"  placeholder={t("Tìm kiếm nội dung bất kì")} required />
            </div>
        </form>
        <div className='relative h-full flex items-center' onMouseOver={()=>handleMouseOver(t("Study24"))} onMouseLeave={()=>handleMouseLeave()}>
            <Link to="/business" className='px-3 hover:text-eighth labMd:hidden'>{t("Study24")}</Link>
            <div className={`absolute top-full right-0 ${isHovered===t('Study24')?"block":"hidden"}`}>
                <div className="w-72 mt-1">
                    <BoxContent h1={t("Cho phép nhóm của bạn truy cập vào hơn 27.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.")} textBn={t("Dùng thử Study24")} center={true} sizeH1={"19"}/>
                </div>
            </div>
        </div>
        <div className='relative h-full flex items-center' onMouseOver={()=>handleMouseOver(t('Giảng dạy trên Udemy'))} onMouseLeave={()=>handleMouseLeave()}>
            <Link to="/teaching" className='px-3 hover:text-eighth tablet:hidden'>{t('Giảng dạy trên Udemy')}</Link>
            <div className={`absolute top-full right-0 ${isHovered===t('Giảng dạy trên Udemy')?"block":"hidden"}`}>
                <div className="w-72 mt-1">
                    <BoxContent h1={t("Biến kiến thức của bạn thành cơ hội và tiếp cận với hàng triệu người trên thế giới.")} textBn={t("Tìm hiểu thêm")} center={true} sizeH1={"19"}/>
                </div>
            </div>
        </div>
        {/* <Link to="/instructor/courses" className='px-3 hover:text-eighth'>Giảng viên</Link>
        <Link to="/home/my-courses/learning" className='px-3 hover:text-eighth'>Học tập</Link> */}
        {/* <Link to="/my-courses/wishlist" className='px-3 hover:text-eighth'>
            <svg className="w-6 h-6 text-gray-800 hover:text-eighth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
            </svg>
        </Link> */}
        <div className='flex h-full'>
            <button to="/cart" className='px-3 hidden tabletXs:block'>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#080341"/>
                </svg>
            </button>
            <div className='relative h-full flex items-center' onMouseOver={()=>handleMouseOver(t('Giỏ hàng'))} onMouseLeave={()=>handleMouseLeave()}>
                <Link to="/cart" className='px-3'>
                    <svg className="clipRule24px] h-[24px] text-gray-800 hover:text-eighth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg>
                </Link>
                <div className={`absolute top-full right-0 ${isHovered===t('Giỏ hàng')?"block":"hidden"}`}>
                    <div className="w-72 mt-1">
                        <BoxCartCourse/>
                    </div>
                </div>
            </div>
            

        </div>
        <Link to="/login" className='ml-2 tabletXs:hidden'>
            <ButtonComponent padding={3} text={t('Đăng nhập')} hover={true} bold={true}/>
        </Link>
        <Link to="/register" className='ml-2 tabletXs:hidden'>
            <ButtonComponent padding={3} text={t("Đăng ký")} bold={true} textColor={"white"} colorBg={"first"}/>
        </Link>
        {/* <Link to="/instructor/user/view-notifications" className="px-3">
            <svg className="w-[24px] h-[24px] text-gray-800 hover:text-eighth" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
            </svg>
        </Link> */}
        <li onClick={()=>setIsOpenModel(true)} className='ml-2 cursor-pointer flex h-10 justify-center items-center w-10 border-first border-solid border font-bold hover:bg-[#1739531f] tabletXs:hidden'>
            <svg className="w-[24px] h-[24px] text-gray-800 " width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#121923" stroke-width="1.2"/>
            </svg>
        </li>
        {/* <Link to="/instructor/profile/basic-information" className="h-12 w-12"></Link> */}
    </div>
  )
}

export default HeaderComponent