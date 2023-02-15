import React from "react";
import Image from "next/image";

export default function Userdesc() {
  return (
    <div>
      <div className=" w-[55rem] border-2 border-gray rounded-2xl bg-white my-8 py-4 px-8">
        <div>
          <div className="font-bold font-[Ubuntu]">Миний тухай</div>
          <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          <div className="py-3  text-sm leading-5 text-primary">
            Jonathan W. Fitch, managing partner of Fitch Law Partners LLP, has
            over 35 years of experience representing clients in complex domestic
            and international business disputes. As both an advocate and
            arbitrator, Mr. Fitch has a wealth of experience and a strong record
            of accomplishment in the resolution of highly complex commercial
            disputes – often involving technologies and life sciences.
          </div>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
        <div>
          <div className="font-bold font-[Ubuntu] pt-3">Боловсрол</div>
          <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          <div className="py-5 text-primary">
            <div className="flex gap-5">
              <div className="font-bold font-[Ubuntu]">2019 – 2022 </div>
              <div>МУИС-Хууль Зүйн Сургууль, магистр </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold font-[Ubuntu]">2019 – 2022 </div>
              <div>МУИС-Хууль Зүйн Сургууль, магистр </div>
            </div>
            <div className="flex gap-5">
              <div className="font-bold font-[Ubuntu]">2019 – 2022 </div>
              <div>МУИС-Хууль Зүйн Сургууль, магистр </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
        <div className="font-bold font-[Ubuntu] pt-3">Ур чадвар & Хобби</div>
        <div className="w-14 h-0.5 bg-secondary mt-1"></div>
        <div className="flex">
          <div className="w-1/2">
            <div className="py-5 font-bold font-[Ubuntu]">Ур чадвар</div>
            <div>• Өөрийгөө илэрхийлэх</div>
            <div> • Зохион бүтээх</div>
          </div>
          <div className="w-1/2">
            <div className="py-5 font-bold font-[Ubuntu]">Хобби</div>
            <div>• Аяллаар явах</div>
            <div> • Гар урлал хийх</div>
          </div>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
        <div>
          <div className="font-bold font-[Ubuntu] pt-3">Тодорхойлолт</div>
          <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          <div className="py-3  text-sm leading-5 text-primary">
            <span className="font-bold"> Б.Тамир: </span> Би өмгөөлөгч
            П.Баттулгыг таньд санал болгохоор бичиж байна. Би түүнтэй сүүлийн
            хэдэн жил хамтран ажиллах завшаан тохиосон бөгөөд түүний хичээл
            зүтгэл, үр ашигтай байдал, чадвар нь байнга гайхуулж байсан. Асуух
            зүйл байвал 555-555-5555 утсаар холбогдоно уу.
          </div>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
        <div>
          <div className="font-bold font-[Ubuntu] pt-3">Бүтээл</div>
          <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          <div className="flex gap-5 pt-3 ">
            <div className="font-bold font-[Ubuntu] text-sm">2009</div>
            <div className="text-sm">
              Хүний эрхийн түгээмэл тунхаглал-Хүний эрхйн баталгаа болох нь,
              эсээ
            </div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold font-[Ubuntu] text-sm">2010</div>
            <div className="text-sm">
              Үндсэн хуульт ёсны төлөвшилтөд ердийн болон дагнасан шүүхийн
              оролцоо, илтгэл
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="font-bold font-[Ubuntu] text-sm">2011</div>
            <div className="text-sm">
              Улс төрийн намуудын байгуулсан гэрээ ба эрх зүйн зохицуулалт,
              хяналт, илтгэл
            </div>
          </div>
          <div className="flex gap-5">
            <div className="font-bold font-[Ubuntu] text-sm">2013</div>
            <div className="text-sm">
              Захиргааны актыг хүчингүй болгохтой холбоотой зарим асуудал, эрдэм
              шинжилгээний өгүүлэл
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center">
            <div className="font-bold font-[Ubuntu] pt-3">Үнэлгээ</div>
            <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          </div>
          <div className="w-full flex justify-between ">
            <div className="font-bold font-[Ubuntu]">Болор-Эрдэнэ ТӨРБОЛД:</div>
            <div className="flex">
              <div className="flex gap-3">
                <div className="font-bold font-[Ubuntu]">3.5</div>
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div className="pt-3">
            Өмгөөлөгч Баттулга бол үйлчлүүлэгчдийнхээ төлөө маш сайн ажилладаг.
            Тэрээр бичих чадвар сайтай бөгөөд үйлчлүүлэгчдийнхээ төлөө шударга
            ёсыг уйгагүй эрэлхийлдэг.
          </div>
          <div className="w-full flex justify-between pt-6 ">
            <div className="font-bold font-[Ubuntu]">Unknown</div>
            <div className="flex">
              <div className="flex gap-3">
                <div className="font-bold font-[Ubuntu]">3.5</div>
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
                <Image
                  src="/images/icons/star.svg"
                  className=" w-5 h-5"
                  alt="youtube"
                  width={100}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div className="pt-3">
            Өмгөөлөгч Баттулга бол үйлчлүүлэгчдийнхээ төлөө маш сайн ажилладаг.
            Тэрээр бичих чадвар сайтай бөгөөд үйлчлүүлэгчдийнхээ төлөө шударга
            ёсыг уйгагүй эрэлхийлдэг.
          </div>
        </div>
      </div>
    </div>
  );
}
