import Star from "@/components/inputs/stars";
import Layout from "@/components/layouts/layout";
import RateMe from "@/components/modules/rateMe";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function UserPofile() {
  const [showRank, setShowRank] = useState(false);

  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <RateMe show={showRank} setShow={setShowRank} />
        <div className="flex gap-10 h-full w-full ">
          <div>
            <div className="w-[28rem] sticky top-28 mb-8 self-start">
              <div>
                <Image
                  src="/images/social/user-cover.svg"
                  className=" w-full"
                  alt="user-cover"
                  width={100}
                  height={80}
                />
              </div>
              <div className="flex pl-2 pt-3 gap-5">
                <div className="bg-white1 absolute w-32 h-32 rounded-full  -translate-y-1/2 "></div>
                <div className=" w-28 h-20 relative">
                  <Image
                    src="/images/profiles/3.jpeg"
                    className=" w-full absolute -translate-y-1/2 left-2 rounded-full"
                    alt="user-profile"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="font-bold font-[Ubuntu]">Company Name </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className=" w-5 h-5"
                    alt="verified"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/images/social/url_facebook.svg"
                    className=" w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_instagram.svg"
                    className=" w-5 h-5"
                    alt="instagram"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_linkedin.svg"
                    className=" w-5 h-5"
                    alt="linkedin"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_youtube.svg"
                    className=" w-5 h-5"
                    alt="youtube"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_twitter.svg"
                    className=" w-5 h-5"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <div className="w-full h-48 border-2 border-gray rounded-2xl mb-10 bg-white">
                <div className="pl-5 pt-3">
                  <div className="font-bold font-[Ubuntu]">
                    Надтай холбогдох
                  </div>
                  <div className="pt-5">
                    <div className="w-full flex gap-12">
                      <div className="flex gap-3">
                        <Image
                          src="/images/icons/phone.svg"
                          className=" w-5 h-5"
                          alt="twitter"
                          width={100}
                          height={80}
                        />
                        <div className="font-bold font-[Ubuntu]">
                          +976 8996 3336
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Image
                          src="/images/icons/phone.svg"
                          className=" w-5 h-5"
                          alt="twitter"
                          width={100}
                          height={80}
                        />
                        <div className="font-bold font-[Ubuntu]">
                          +976 8996 3336
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 py-3">
                      <div>
                        <Image
                          src="/images/icons/mail.svg"
                          className=" w-5 h-5"
                          alt="twitter"
                          width={100}
                          height={80}
                        />
                      </div>
                      <div className="font-bold font-[Ubuntu]">
                        battulga.purvee@gmail.com
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src="/images/icons/location.svg"
                          className=" w-10 h-10"
                          alt="twitter"
                          width={100}
                          height={80}
                        />
                      </div>
                      <div className="font-bold font-[Ubuntu]">
                        Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Амарын
                        гудамж 29, Сан Бизнес Центр, 402 тоот
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-3 items-center">
                  <div className="font-bold font-[Ubuntu]">3.5</div>
                  <Star value={3.5} />
                </div>

                <button
                  onClick={() => setShowRank(true)}
                  className="ml-6 w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md hover:drop-shadow-xl"
                >
                  Үнэлгээ өгөх
                </button>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="text-sm text-center py-6">
                  Манай үйлчилгээ нь хуульч, өмгөөлөгч, судлаач, хуулийн
                  фирмүүүдийн нарийвчилсан мэдээллийг шуурхай, хүртээмжэйгээр
                  харуулах тул таныг боломжит үйлчлүүлэгч, харилцагчтай холбоход
                  тусална.
                </div>
                <div className="text-secondary underline">БИДЭНТЭЙ НЭГДЭХ</div>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-[55rem] border-2 border-gray rounded-2xl bg-white my-8 py-4 px-8">
              <div>
                <div className="font-bold font-[Ubuntu]">Миний тухай</div>
                <div className="w-14 h-0.5 bg-secondary mt-1"></div>
                <div className="py-3  text-sm leading-5 text-primary">
                  Jonathan W. Fitch, managing partner of Fitch Law Partners LLP,
                  has over 35 years of experience representing clients in
                  complex domestic and international business disputes. As both
                  an advocate and arbitrator, Mr. Fitch has a wealth of
                  experience and a strong record of accomplishment in the
                  resolution of highly complex commercial disputes – often
                  involving technologies and life sciences.
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
              <div className="font-bold font-[Ubuntu] pt-3">
                Ур чадвар & Хобби
              </div>
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
                  П.Баттулгыг таньд санал болгохоор бичиж байна. Би түүнтэй
                  сүүлийн хэдэн жил хамтран ажиллах завшаан тохиосон бөгөөд
                  түүний хичээл зүтгэл, үр ашигтай байдал, чадвар нь байнга
                  гайхуулж байсан. Асуух зүйл байвал 555-555-5555 утсаар
                  холбогдоно уу.
                </div>
              </div>
              <div className=" w-full h-[1px] mt-8 bg-[#D9D9D9]"></div>
              <div>
                <div className="font-bold font-[Ubuntu] pt-3">Бүтээл</div>
                <div className="w-14 h-0.5 bg-secondary mt-1"></div>
                <div className="flex gap-5 pt-3 ">
                  <div className="font-bold font-[Ubuntu] text-sm">2009</div>
                  <div className="text-sm">
                    Хүний эрхийн түгээмэл тунхаглал-Хүний эрхйн баталгаа болох
                    нь, эсээ
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
                    Улс төрийн намуудын байгуулсан гэрээ ба эрх зүйн
                    зохицуулалт, хяналт, илтгэл
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="font-bold font-[Ubuntu] text-sm">2013</div>
                  <div className="text-sm">
                    Захиргааны актыг хүчингүй болгохтой холбоотой зарим асуудал,
                    эрдэм шинжилгээний өгүүлэл
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
                  <div className="font-bold font-[Ubuntu]">
                    Болор-Эрдэнэ ТӨРБОЛД:
                  </div>
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
                  Өмгөөлөгч Баттулга бол үйлчлүүлэгчдийнхээ төлөө маш сайн
                  ажилладаг. Тэрээр бичих чадвар сайтай бөгөөд
                  үйлчлүүлэгчдийнхээ төлөө шударга ёсыг уйгагүй эрэлхийлдэг.
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
                  Өмгөөлөгч Баттулга бол үйлчлүүлэгчдийнхээ төлөө маш сайн
                  ажилладаг. Тэрээр бичих чадвар сайтай бөгөөд
                  үйлчлүүлэгчдийнхээ төлөө шударга ёсыг уйгагүй эрэлхийлдэг.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
