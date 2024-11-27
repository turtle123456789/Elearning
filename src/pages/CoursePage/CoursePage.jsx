
import { Link } from 'react-router-dom'
import { RatingComponent } from '../../components/RatingComponent/RatingComponent'
import { BoxVideoComponent } from '../../components/BoxVideoComponent/BoxVideoComponent'
import { useTranslation } from 'react-i18next'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { AccordionComponent } from '../../components/AccordionComponent/AccordionComponent'

const CoursePage = () => {

    const {t} = useTranslation()
  return (
    <div className='bg-white'>
        <div className='bg-first py-8 text-white' >
            <div className='relative max-w-[1184px] mx-auto '>
                <div className='absolute z-50 right-12 shadow-lg'>
                    <BoxVideoComponent />
                </div>
                <div className='absolute z-50 right-12 shadow-lg' style={{top:"860px"}}>
                    <BoxVideoComponent />
                </div>
                <div className='ml-4 max-w-[700px]'>
                    <div className='text-fourth flex items-center gap-2 font-bold'>
                        <Link to="">Phát triển</Link>
                        <svg fill="#c0c4fc" height="10px" width="10px" version="1.1" viewBox="0 0 24 24" stroke="#c0c4fc">
                            <g>
                                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                            </g>
                        </svg>
                        <Link to="">Ngôn ngữ lập trình</Link>
                        <svg fill="#c0c4fc" height="10px" width="10px" version="1.1" viewBox="0 0 24 24" stroke="#c0c4fc">
                            <g>
                                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                            </g>
                        </svg>
                        <Link to="">Python</Link>
                    </div>
                    <h1 className='font-sans my-4'>Lập trình Python từ cơ bản đến nâng cao thông qua các dự án</h1>
                    <p className='text-[19px]'>Lập trình Python từ cơ bản đến nâng cao thông qua các dự án với sự hỗ trợ của trí tuệ nhân tạo AI</p>
                    <div className='flex gap-2 items-center'>
                        <div className='mt-2 mb-1 '>
                            <span className='bg-[#eceb98] text-first text-xs font-bold px-2 py-1'>Bán chạy nhất</span>
                        </div>
                        <RatingComponent show={true} colorNumberRank={"fourth"} colorNumberStar={"nineth"}/>
                        <span>463 học viên</span>
                    </div>
                    <div>
                        <span>Được tạo bởi <Link className='text-fourth underline'>Toan Bill</Link></span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span>Lần cập nhật gần đây nhất 7/2024</span>
                        <svg className="mr-1"width="16px" height="16px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#ffffff" stroke-width="1.2"/> </g>
                        </svg>
                        <span>Vietnamese</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-[1184px] mx-auto mt-8'>
            <div className='max-w-[700px]'>
                <div className=' border bottom-1 p-6 mb-8'>
                    <h2 className='mb-4'>{t("Nội dung bài học")}</h2>
                    <div className='grid grid-cols-2 gap-x-8'>
                        <li className='flex gap-3 py-1'>
                            <span>
                                <svg width="16px" height="19.6px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#2d2f31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                </svg>
                            </span>
                            Tư duy quản lý khoa học, áp dụng vào mọi mặt trong cuộc sống
                        </li>
                        <li className='flex gap-3 py-1'>
                            <span>
                                <svg width="16px" height="19.6px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#2d2f31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                </svg>
                            </span>
                            Dùng Notion một cách linh hoạt và thông minh, thay thế hầu hết các công cụ bạn hiện đang dùng.
                        </li>
                        <li className='flex gap-3 py-1'>
                            <span>
                                <svg width="16px" height="19.6px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#2d2f31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                </svg>
                            </span>
                            Tăng cao năng suất làm việc, học tập do đã quản lý khoa học
                        </li>
                        <li className='flex gap-3 py-1'>
                            <span>
                                <svg width="16px" height="19.6px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke="#2d2f31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                                </svg>
                            </span>
                            Tiết kiệm thời gian tự tìm hiểu
                        </li>
                    </div>
                </div>
                <h2>{t("Khám phá các chủ đề liên quan")}</h2>
                <div className='flex gap-2 mt-4 mb-8'>
                    <div>
                        <ButtonComponent text={t("Notion Workspace")} hover={true} height={"h-12"} rounder={true}/>
                    </div>
                    <div>
                        <ButtonComponent text={t("Năng xuất văn phòng khác")} hover={true} height={"h-12"} rounder={true}/>
                    </div>
                    <div>
                        <ButtonComponent text={t("Năng xuất văn phòng")} hover={true} height={"h-12"} rounder={true}/>
                    </div>
                </div>
                <div className='border bottom-1 p-4 mb-6'>
                    <h3>{t("Các công ty hàng đầu cung cấp khóa học này cho nhân viên")}</h3>
                    <p>{t("Chúng tôi lựa chọn khóa học này cho tuyển tập khóa học đầu bảng được các doanh nghiệp toàn cầu tin dùng. ")}<Link className='text-eighth underline underline-offset-4'>{t("Tìm hiểu thêm")}</Link></p>
                    <div className='flex justify-between'>
                        <div>
                            <img className='h-9' src="assets/brands/brand8.svg" alt="" />
                        </div>
                        <div>
                            <img className='h-9' src="assets/brands/brand0.svg" alt="" />
                        </div>
                        <div>
                            <img className='h-9' src="assets/brands/brand9.svg" alt="" />
                        </div>
                        <div>
                            <img className='h-9' src="assets/brands/brand10.svg" alt="" />
                        </div>
                        <div>
                            <img className='h-9' src="assets/brands/brand11.svg" alt="" />
                        </div>
                    </div>
                </div>
                <h2 className='my-4'>{t("Nội dung khóa học")}</h2>
                <div className='flex justify-between my-2'>
                    <p className='flex items-center'>10 {t("phần")} <img className='w-4 h-4' src="assets/icons/dot-svgrepo-com.svg" alt="" />42 {t("bài giảng")}<img className='w-4 h-4' src="assets/icons/dot-svgrepo-com.svg" alt="" />3 {t("giờ")} 28 {t("phút tổng thời lượng")}</p>
                    <button className='text-eighth font-bold'>{t("Mở rộng tất cả sản phẩm")}</button>
                </div>
                <div>
                    <AccordionComponent/>
                </div>
                <h2 className='mb-4 mt-8'>{t("Yêu cầu")}</h2>
                <ul className='list-outside pl-6'>
                    <li className='list-disc leading-tight'>Bạn cần có một chiếc máy tính hoặc laptop có kết nối Internet.</li>
                    <li className='list-disc leading-tight'>Bạn cần có tài khoản Canva Pro để thực hành (chi tiết được hướng dẫn trong khóa học).</li>
                    <li className='list-disc leading-tight'>Không yêu cầu bạn cần phải biết cách sử dụng Canva trước đây.</li>
                    <li className='list-disc leading-tight'>Không yêu cầu bạn có kiến thức chuyên sâu về thiết kế đồ họa.</li>
                    <li className='list-disc leading-tight'>Bạn cần có tinh thần học tập quyết tâm, tập trung và đặc biệt cần nhớ thực hành thường xuyên để không ngừng phát triển.</li>
                </ul>
                <h2 className='mb-4 mt-8'>{t("Mô tả")}</h2>
                <div>
                    <p>
                        <strong>Chào mừng bạn đến với khóa học: “Canva 101 | Làm chủ kỹ năng thiết kế với Canva cho người mới – Tự tin sử dụng Canva để thiết kế ấn phẩm, video ứng dụng vào công việc, dự án kinh doanh hay cuộc sống cá nhân”!</strong>
                    </p>
                    <p className='mt-2'>
                        <strong>
                            1. Tại sao bạn bắt buộc cần làm chủ kỹ năng thiết kế và tại sao bạn nên lựa chọn công cụ Canva?
                        </strong>
                    </p>
                    <p className='mt-2'>Làm chủ nghệ thuật kể chuyện bằng hình ảnh, thành thạo việc thiết kế những sản phẩm tuyệt vời không chỉ là kỹ năng bắt buộc với những người làm thiết kế, quảng cáo mà còn cần thiết với bất kỳ ai. Sở hữu kỹ năng thiết kế tốt sẽ khiến bạn trở nên khác biệt, xuất sắc, mở rộng cơ hội tăng thu nhập (bất kể bạn làm gì).</p>
                    <p className='mt-2'>Tin vui là bạn không cần học cách sử dụng những phần mềm phức tạp và đắt tiền như: Photoshop hay Illustrator. Bạn cũng không cần phải bỏ tiền để thuê Designer với mức phí đắt đỏ mà không chắc có được sự hài lòng.</p>
                    <p className='mt-2'>Canva là một ứng dụng thiết kế đồ họa trực tuyến thân thiện phù hợp với bất kỳ ai. Có thể bạn không tin nhưng ngay cả các em bé lứa tuổi tiểu học hay các cô bác độ tuổi hưu cũng có thể sử dụng Canva một cách thành thạo.</p>
                    <p className='mt-2'>Canva sở hữu kho tàng khổng lồ các mẫu (Template), hình ảnh (Photo), đồ họa (Element), phông chữ (Font) và nhiều tính năng ưu việt vô cùng dễ sử dụng, cho phép người dùng thoải mái tùy chỉnh theo nhu cầu.</p>
                    <p className='mt-2'>Nền tảng thiết kế "kéo - thả" Canva sẽ giúp bạn thiết kế “cả thế giới” một cách nhanh nhất, dễ nhất với mức chi phí hợp lý nhất.</p>
                    <p className='mt-2'>Và khóa học này ở đây, được thiết kế với sứ mệnh giúp bạn thành thạo công cụ tuyệt vời này ngay cả khi bạn chỉ mới bắt đầu.</p>
                    <p className='mt-2'>
                        <strong>
                            2. Khóa học này phù hợp và cần thiết với bạn nếu như bạn là:
                        </strong>
                    </p>
                    <p className='mt-2'>
                        <strong>
                            5. Giảng viên của bạn là ai?
                        </strong>
                    </p>
                    <p className='mt-2'>Tôi là Lê Phương Thanh đến từ Skill Sharing School một nền tảng giúp bạn phát triển bản thân và khám phá tiềm năng không giới hạn.</p>

                    <p className='mt-2'>Tôi đã bắt đầu sử dụng Canva từ năm 2017 và không ngừng sử dụng cho đến ngày hôm nay cũng như tiếp tục gắn bó trong tương lai.</p>

                    <p className='mt-2'>Tôi tham gia chặt chẽ vào những cộng đồng quốc tế thảo luận về Canva, không ngừng cập nhật những tính năng mới nhất của ứng dụng này để có được những hiểu biết sâu sắc về nền tảng và cách sử dụng nó tốt nhất.</p>

                    <p className='mt-2'>Canva đã thay đổi toàn bộ công việc và cuộc sống của tôi theo cách tích cực nhất và tôi muốn chia sẻ lại tất cả với bạn.</p>

                    <p className='mt-2'>Khóa học này được hướng dẫn bởi giảng viên đã có kinh nghiệm thực chiến sử dụng ứng dụng Canva trong nhiều năm vào nhiều lĩnh vực công việc, dự án kinh doanh online cho đến cuộc sống cá nhân.</p>

                    <p className='mt-2'>Tôi đã có kinh nghiệm đào tạo hàng trăm học viên từ con số 0 trở nên thành thạo, tự tin thiết kế các sản phẩm cho riêng mình với Canva. Và tôi tin rằng có thể giúp bạn đạt được kết quả tương tự.</p>

                    <p className='mt-2'>Với khóa học này, tương tự với sứ mệnh của Canva, tôi có sứ mệnh mang: “Kỹ năng thiết kế đến với tất cả mọi người (Design for everyone)”.</p>

                    <p className='mt-2'>
                        <strong>
                            Đừng chần chừ, khóa học này và công cụ Canva sẽ là chìa khóa mang đến thu nhập cao, cơ hội thăng tiến, sự phát triển vượt bậc trong kinh doanh hay nâng cấp cuộc sống cá nhân của bạn!
                        </strong>
                    </p>

                    <p className='mt-2'>Bấm nút mua khóa học ngay hôm nay để mở ra cánh cửa đến với những cơ hội tuyệt vời sau khi kết thúc hành trình cùng tôi với khóa học này.</p>

                    <p className='mt-2'>
                        <strong>
                            Hẹn gặp lại bạn trong khóa học!
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursePage