'use client';


import { Images } from "@/assets/imgs";
import ShowImage from "@/components/ShowImage";
import Section from "@/motion/Section";
import Span from "@/motion/Span";
import View from "@/motion/View";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isEffectImage, setIsEffectImage] = useState(0)

  return (
    <>
      <main className=" min-h-screen flex flex-col gap-8 bg-black text-white -webkit-user-select-none">
        <View className="w-full h-screen overflow-hidden gap-2 lg:gap-0  flex lg:flex-row flex-col relative shadow-xl">
          <View className="absolute w-full   h-full top-0 left-0 bg-transparent z-10  flex items-center">
          </View>
          <View className="flex-1   h-[20%] lg:h-auto  overflow-hidden relative flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut", type: "spring", bounce: 0.5 }}
          >
            <img src="https://cdnb.artstation.com/p/assets/images/images/038/527/559/4k/kim-sung-hwan-cruella-small.jpg?1623333521" alt="nevshion"
              className="object-cover w-full h-full"
            />
            <Span className="absolute text-[2rem] lg:text-[16rem]  font-bold text-[#ffffff80]"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: "easeInOut", type: "spring", bounce: 0.5 }}
            >N</Span>
          </View>
          <View className="flex-1 overflow-hidde h-[20%] lg:h-auto  relative flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut", type: "spring", bounce: 0.5 }}
          >
            <img src="https://cdnb.artstation.com/p/assets/images/images/033/998/753/large/javier-benver-javierbenver-12.jpg?1611132680" alt="nevshion"
              className="object-cover w-full h-full"
            />
            <Span className="absolute text-[2rem] lg:text-[16rem]   font-bold text-[#ffffff80]"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: "easeInOut", type: "spring", bounce: 0.5 }}
            >E</Span>
          </View>
          <View className="flex-1 overflow-hidden h-[20%] lg:h-auto  relative flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut", type: "spring", bounce: 0.5 }}
          >
            <img src="https://cdna.artstation.com/p/assets/images/images/066/943/030/large/mengxuan-li-f5lydsea0aaunvx.jpg?1694143994" alt="nevshion"
              className="object-cover w-full h-full"
            />
            <Span className="absolute text-[2rem] lg:text-[16rem]   font-bold text-[#ffffff80]"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: "easeInOut", type: "spring", bounce: 0.5 }}
            >S</Span>
          </View>
          <View className="flex-1 overflow-hidden h-[20%] lg:h-auto  relative flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut", type: "spring", bounce: 0.5 }}
          >
            <img src="https://cdnb.artstation.com/p/assets/images/images/066/952/111/large/yuming-li-moonlit-enchantress.jpg?1694170319" alt="nevshion"
              className="object-cover w-full h-full"
            />
            <Span className="absolute text-[2rem] lg:text-[16rem]   font-bold text-[#ffffff80]"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: "easeInOut", type: "spring", bounce: 0.5 }}
            >O</Span>
          </View>
          <View className="flex-1 overflow-hidden h-[20%] lg:h-auto  relative flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeInOut", type: "spring", bounce: 0.5 }}
          >
            <img src="https://cdna.artstation.com/p/assets/images/images/066/924/578/large/rebeca-puebla-d22410171198103-646b3c850fd1a.jpg?1694100361" alt="nevshion"
              className="object-cover w-full h-full"
            />
            <Span className="absolute text-[2rem] lg:text-[16rem]   font-bold text-[#ffffff80]"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3, ease: "easeInOut", type: "spring", bounce: 0.5 }}
            >N</Span>
          </View>
        </View>
        <Section>
          <View className="flex flex-col px-4 lg:mb-2 items-center">
            <h1 className="text-center font-bold tracking-wider text-[1.4rem]">Hiểu về chúng tôi.</h1>
            <p className="text-center max-w-[26rem] text-[0.8rem]">Neson một chi nhánh website thời trang hoàn toàn mới của Nevsolit. Nơi mà bạn sẽ thấy những phong cách trình diễn trên website một cách nghệ thuật nhất.</p>
          </View>
        </Section>
        <View className=" flex flex-col lg:flex-row justify-center items-center">
          <Section>
            <View className="flex-1 relative  py-2 px-4 w-full  lg:h-screen">
              <img src="https://cdnb.artstation.com/p/assets/images/images/066/827/141/4k/tea-me-mtxx-mh20230905-000733498-1.jpg?1693877991" alt="nevshion"
                className="object-cover w-full h-full lg:absolute lg:object-none lg:h-auto lg:w-[20rem] lg:bottom-4"
              />
              <p className="absolute bottom-8 right-8 text-[0.8rem] text-end max-w-[20rem] lg:left-4 lg:text-start lg:translate-x-[110%]">
                Bộ sưu tập được ưa chuộng nhất của Neson Margiela phác thảo những gợi ý phổ biến nhất.
              </p>
            </View>
          </Section>
          <Section>
            <View className="flex-1 lg:h-screen  py-2 px-4  lg:py-0 relative w-full">
              <img src='https://cdna.artstation.com/p/assets/images/images/020/996/286/large/geirrod-van-dyke-st-hubertus.jpg?1569967491' alt="nevshion"
                className="object-cover w-full h-full "
              />
              <p className="absolute bottom-8 left-8 text-[0.8rem] text-start max-w-[20rem] lg:top-4 lg:translate-x-[-120%] lg:text-end">
                Đẳng cấp trong lĩnh vực đồ họa tạo nên sự đỉnh cao của Neson. Nghệ thuật làm nên vẽ đẹp cuộc sống, kiến tạo nên con người.
              </p>
            </View>
          </Section>
        </View>
        <View className=" p-4 lg:h-screen lg:justify-center flex flex-col relative gap-4  items-center">
          <Section>
            <View className="lg:absolute lg:top-4">
              <h1 className="text-center font-bold text-[1.4rem] mb-2 lg:text-start">Tuyệt sắc hoa biến.</h1>
              <p className="text-center text-[0.8rem] max-w-[20rem] m-auto lg:text-start">Nghệ thuật từ vạn vật cuộc sống, không chỉ từ ánh mắt, mà còn đến từ sự cảm nhận.</p>
            </View>
          </Section>
          <View className="flex flex-col relative lg:flex-row mt-8 gap-4 lg:gap-0 items-center w-full lg:h-full">
            <Section>
              <View className="h-[15rem] lg:translate-y-[50%] lg:h-[20rem] bg-yellow-300 w-full"
                onClick={() => setIsEffectImage(1)} >
                <img src="https://cdnb.artstation.com/p/assets/images/images/066/850/709/4k/ivan-vujovic-tranquil.jpg?1693930949" alt="nevsolit" className="w-full h-full object-cover" />
              </View>
            </Section>
            <Section>
              <View className="h-[15rem] lg:translate-y-[-50%] lg:h-[20rem] bg-yellow-300 w-full"
                onClick={() => setIsEffectImage(2)}
              >
                <img src="https://cdnb.artstation.com/p/assets/images/images/066/880/475/large/sylvain-sarrailh-emptyland06a.jpg?1694002880" alt="nevsolit" className="w-full h-full object-cover" />
              </View>
            </Section>
            <Section>
              <View className="h-[15rem] lg:translate-y-[50%] lg:h-[20rem] bg-yellow-300 w-full"
                onClick={() => setIsEffectImage(3)}
              >
                <img src="https://cdna.artstation.com/p/assets/images/images/066/821/970/4k/connor-sheehan-test-level-01-render-beauty.jpg?1693863375" alt="nevsolit" className="w-full h-full object-cover" />
              </View>
            </Section>
            {
              isEffectImage !== 0 && (
                <ShowImage kind={isEffectImage} close={() => setIsEffectImage(0)} />
              )
            }
          </View>
        </View>
        <Section>
          <View className="h-screen p-4">
            <View className="w-full h-full border-4 p-4 flex justify-center items-center flex-col bg-fixed border-white bg-cover" style={{ backgroundImage: "url(https://cdnb.artstation.com/p/assets/images/images/029/285/245/4k/florent-boston-mr-suicidesheep-x-boston-florent.jpg?1597064136)" }}>
              <Link href="https://www.nevsolit.website/" className="w-[3rem] h-[3rem] flex justify-center items-center font-bold rounded-lg bg-black text-white">N</Link>
              <p className="mt-4 text-[0.8rem] ">Đến với Nevsolit để hiểu rõ hơn về chúng tôi!</p>
            </View>
          </View>
        </Section>
        <View className="text-center py-4 text-[0.8rem]">
          <p>Website code by @Min</p>
        </View>
      </main >
    </>
  )
}
