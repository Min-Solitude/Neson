import View from "@/motion/View"
import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

type ShowImageProps = {
    kind: number,
    close: () => void
}

const ShowImage = ({ kind, close }: ShowImageProps) => {

    const [isShowContent, setIsShowContent] = useState(0)

    return (
        <View className="absolute top-0 left-0 w-full h-full bg-[#00000090]  flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <button
                className="absolute top-0 z-20 right-0 p-2 cursor-pointer"
                onClick={close}
            >
                <IonIcon name="close" className="text-[#ffffff] text-[2rem] " />
            </button>
            {
                kind === 1 ? (
                    <View className="w-full h-full flex-col  flex justify-center items-center">
                        <h1 className="font-bold mb-8 text-[1.1rem] lg:mb-16">Nghệ thuật ở cả trên mặt.</h1>
                        <View className="20 bg-black overflow-hidden">
                            <video className="w-full max-h-[30rem] object-cover" autoPlay>
                                <source src="https://v1.pinimg.com/videos/mc/720p/1f/80/23/1f8023040c2f8f58eca9e46f40fb6b6d.mp4" type="video/mp4" />
                            </video>
                        </View>
                    </View>
                ) : kind === 2 ? (
                    <View className="overflow-hidden lg:px-28 w-full h-full relative">
                        <p className="text-center mt-24 text-[0.9rem]">
                            {
                                isShowContent === 0 ? (
                                    "Chọn một tấm bài"
                                ) : isShowContent === 1 ? (
                                    "Nghiêng ra là một quan điểm cấp tiến đáng tiếc rằng chính hệ thống bị hỏng chứ không phải chúng ta. Đó là lý do tại sao thay vì thay đổi bản thân, chúng ta lại tận hưởng cuộc sống và thay đổi thế giới."
                                ) : isShowContent === 2 ? (
                                    "Bằng cách sản xuất ít quần áo tốt hơn cho các thành viên, chúng tôi tin rằng chúng tôi có thể giảm cường độ vật chất trong hoạt động kinh doanh của mình - sử dụng ít tài nguyên của thế giới hơn và ngăn chặn thảm họa khí hậu. Chúng tôi phát triển bằng cách mở rộng cộng đồng của mình thay vì phổ biến các sản phẩm không cần thiết."
                                ) : (
                                    "Cộng đồng tạo ra các thiết bị để ra ngoài. Chúng tôi tạo ra một hệ thống được chỉnh sửa chặt chẽ về áo khoác ngoài kỹ thuật cho mọi tình huống và mọi giới tính, đồng thời chúng tôi phát triển bằng cách sản xuất cho các thành viên của mình thay vì tràn ngập các kệ bán lẻ để có được sản phẩm tối đa."
                                )
                            }
                        </p>
                        <View className="w-[10rem]  overflow-hidden shadow-sm border cursor-pointer border-white h-[15rem] absolute bottom-0 left-[50%] translate-y-[20%] rounded-lg "
                            initial={{ scale: 1, y: '20%', x: '-120%', rotate: -12 }}
                            animate={{ scale: 1.1, y: '20%', x: '-120%', rotate: -12 }}
                            whileHover={{ scale: 1.2, y: '-50%', rotate: 0, zIndex: 20 }}
                            onClick={() => setIsShowContent(1)}
                            whileTap={{ scale: 1.1, y: '-50%', rotate: 0, zIndex: 20 }}
                        >
                            <img src="https://cdna.artstation.com/p/assets/images/images/066/912/080/4k/travis-anderson-cafefar-copy.jpg?1694075323" alt="nesoi" className="w-full h-full object-cover" />
                        </View>
                        <View className="w-[10rem] overflow-hidden shadow-sm border cursor-pointer border-white z-10 h-[15rem] absolute bottom-0 left-[50%] rounded-lg "
                            initial={{ scale: 1, x: '-50%', y: '20%' }}
                            animate={{ scale: 1.1, x: '-50%', y: '20%' }}
                            whileHover={{ scale: 1.2, x: '-50%', y: '-50%', }}
                            onClick={() => setIsShowContent(2)}
                            whileTap={{ scale: 1.1, y: '-50%', rotate: 0 }}
                        >
                            <img src="https://cdnb.artstation.com/p/assets/images/images/066/804/795/4k/gabriel-nagypal-gn-lake-trout-img-02.jpg?1693833757" alt="nesoi" className="w-full h-full object-cover" />
                        </View>
                        <View className="w-[10rem]  overflow-hidden shadow-sm border cursor-pointer border-white h-[15rem] absolute bottom-0 left-[50%] translate-y-[20%] rounded-lg "
                            initial={{ scale: 1, y: '20%', x: '30%', rotate: 12 }}
                            animate={{ scale: 1.1, y: '20%', x: '30%', rotate: 12 }}
                            whileHover={{ scale: 1.2, y: '-50%', rotate: 0, zIndex: 20 }}
                            onClick={() => setIsShowContent(3)}
                            whileTap={{ scale: 1.1, y: '-50%', rotate: 0, zIndex: 20 }}
                        >
                            <img src="https://cdna.artstation.com/p/assets/images/images/066/870/592/large/max-hay-asset.jpg?1693979943" alt="nesoi" className="w-full h-full object-cover" />
                        </View>
                    </View>
                ) : (
                    <View className="w-full h-full lg:flex-row-reverse bg-black flex flex-col items-center">
                        <View className="flex-1 w-full lg:h-full overflow-hidden">
                            <img src="https://cdnb.artstation.com/p/assets/images/images/034/479/697/4k/huleeb-403-02-feb-2021-final-c.jpg?1612392538" alt="nesoi" className="w-full h-full object-cover" />
                        </View>
                        <View className="flex-1 w-full flex justify-center items-center">
                            <i className="text-[0.8rem] text-center max-w-[25rem]">"Người nghệ sĩ phải tạo ra một tia lửa trước khi có thể nhóm lên ngọn lửa và trước khi nghệ thuật sinh ra, người nghệ sĩ phải sẵn sàng để ngọn lửa sáng tạo của chính mình nuốt trọn."</i>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default ShowImage